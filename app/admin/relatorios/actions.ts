"use server"

import { createClient } from "@/lib/supabase/server"

export async function getOrdersForReport() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not authenticated")
  }

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

  if (profile?.role !== "admin") {
    throw new Error("User is not an admin")
  }

  const { data: orders, error } = await supabase
    .from("orders")
    .select(
      `
      id,
      status,
      total,
      created_at,
      profiles:user_id(name)
    `,
    )
    .order("created_at", { ascending: false })

  if (error) {
    throw new Error(`Failed to fetch orders: ${error.message}`)
  }

  return orders || []
}
