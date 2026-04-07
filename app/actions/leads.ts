"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// ─── Schemas de validação (proteção contra dados maliciosos) ───────────────

const emailSchema = z
  .string()
  .email("E-mail inválido.")
  .max(254, "E-mail muito longo.")
  .toLowerCase()
  .trim()

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome muito curto.")
    .max(100, "Nome muito longo.")
    .trim()
    .regex(/^[\p{L}\s'-]+$/u, "Nome contém caracteres inválidos."),
  email: emailSchema,
  phone: z
    .string()
    .max(20, "Telefone muito longo.")
    .regex(/^[\d\s()\-+]*$/, "Telefone contém caracteres inválidos.")
    .optional()
    .nullable(),
  message: z
    .string()
    .min(10, "Mensagem muito curta.")
    .max(2000, "Mensagem muito longa (máx. 2000 caracteres).")
    .trim(),
})

const statusSchema = z.enum(["new", "read", "replied", "archived"])

// ─── Actions ──────────────────────────────────────────────────────────────

export async function subscribeNewsletter(email: string) {
  try {
    // Validação server-side antes de qualquer acesso ao banco
    const parsed = emailSchema.safeParse(email)
    if (!parsed.success) {
      return { success: false, error: "E-mail inválido." }
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email: parsed.data }])
      .select()
      .single()

    if (error) {
      if (error.code === "23505") {
        return { success: false, error: "Este e-mail já está cadastrado na nossa newsletter." }
      }
      return { success: false, error: "Erro ao cadastrar e-mail. Tente novamente." }
    }

    revalidatePath("/admin/leads")
    return { success: true, data }
  } catch (error) {
    console.error("Newsletter error:", error)
    return { success: false, error: "Erro ao cadastrar e-mail. Tente novamente." }
  }
}

export async function submitContactMessage(formData: {
  name: string
  email: string
  phone?: string
  message: string
}) {
  try {
    // Validação server-side com Zod (previne XSS e injeção de dados)
    const parsed = contactSchema.safeParse(formData)
    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message ?? "Dados inválidos."
      return { success: false, error: firstError }
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || null,
          message: parsed.data.message,
          status: "new",
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Contact error:", error)
      return { success: false, error: "Erro ao enviar mensagem. Tente novamente." }
    }

    revalidatePath("/admin/leads")
    return { success: true, data }
  } catch (error) {
    console.error("Contact exception:", error)
    return { success: false, error: "Erro ao enviar mensagem. Tente novamente." }
  }
}

export async function updateContactMessageStatus(id: string, status: string) {
  try {
    const supabase = await createClient()

    // Verificação de autenticação e permissão de admin
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return { success: false, error: "Não autenticado." }
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single()

    if (profile?.role !== "admin") {
      return { success: false, error: "Acesso negado." }
    }

    // Valida o ID (UUID format) e o status para prevenir injeção
    const idParsed = z.string().uuid("ID inválido.").safeParse(id)
    if (!idParsed.success) {
      return { success: false, error: "ID de mensagem inválido." }
    }

    const statusParsed = statusSchema.safeParse(status)
    if (!statusParsed.success) {
      return { success: false, error: "Status inválido." }
    }

    const { error } = await supabase
      .from("contact_messages")
      .update({ status: statusParsed.data })
      .eq("id", idParsed.data)

    if (error) {
      return { success: false, error: "Erro ao atualizar status." }
    }

    revalidatePath("/admin/leads")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Erro ao atualizar status." }
  }
}
