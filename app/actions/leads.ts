"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function subscribeNewsletter(email: string) {
  try {
    console.log("[v0] Newsletter subscription attempt for:", email)
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email, status: "active", source: "website" }])
      .select()
      .single()

    if (error) {
      console.error("[v0] Newsletter subscription error:", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      })

      if (error.code === "23505") {
        return { success: false, error: "Este e-mail já está cadastrado na nossa newsletter." }
      }

      if (error.code === "42P01") {
        console.error("[v0] Table newsletter_subscribers does not exist!")
        return { success: false, error: "Sistema de newsletter não configurado. Entre em contato com o suporte." }
      }

      return { success: false, error: "Erro ao cadastrar e-mail. Tente novamente." }
    }

    console.log("[v0] Newsletter subscription successful:", data.id)
    revalidatePath("/admin/leads")
    return { success: true, data }
  } catch (error) {
    console.error("[v0] Newsletter subscription exception:", error)
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
    console.log("[v0] Contact message submission attempt from:", formData.email)
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
          status: "new",
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("[v0] Contact message error:", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      })

      if (error.code === "42P01") {
        console.error("[v0] Table contact_messages does not exist!")
        return { success: false, error: "Sistema de contato não configurado. Entre em contato com o suporte." }
      }

      return { success: false, error: "Erro ao enviar mensagem. Tente novamente." }
    }

    console.log("[v0] Contact message submitted successfully:", data.id)
    revalidatePath("/admin/leads")
    return { success: true, data }
  } catch (error) {
    console.error("[v0] Contact message exception:", error)
    return { success: false, error: "Erro ao enviar mensagem. Tente novamente." }
  }
}

export async function updateContactMessageStatus(id: string, status: string) {
  try {
    const supabase = await createClient()

    const { error } = await supabase.from("contact_messages").update({ status }).eq("id", id)

    if (error) {
      console.error("Error updating contact message status:", error)
      return { success: false, error: "Erro ao atualizar status." }
    }

    revalidatePath("/admin/leads")
    return { success: true }
  } catch (error) {
    console.error("Error updating contact message status:", error)
    return { success: false, error: "Erro ao atualizar status." }
  }
}
