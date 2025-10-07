"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function subscribeNewsletter(email: string) {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase.from("newsletter_subscribers").insert([{ email }]).select().single()

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

    const { error } = await supabase.from("contact_messages").update({ status }).eq("id", id)

    if (error) {
      return { success: false, error: "Erro ao atualizar status." }
    }

    revalidatePath("/admin/leads")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Erro ao atualizar status." }
  }
}
