"use server"

import { createClient as createServerClient } from "@/lib/supabase/server"
import { createClient } from "@supabase/supabase-js"

function createAdminClient() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

export async function getOrdersWithProfiles() {
  // Verify user is admin
  const supabase = await createServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Não autenticado")
  }

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

  if (profile?.role !== "admin") {
    throw new Error("Acesso negado")
  }

  // Use service role to fetch orders with profiles (bypasses RLS)
  const adminClient = createAdminClient()

  const { data: ordersData, error: ordersError } = await adminClient
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false })

  if (ordersError) {
    console.error("[v0 Admin] Error loading orders:", ordersError)
    throw ordersError
  }

  // Fetch order items and profiles for each order
  const ordersWithDetails = await Promise.all(
    (ordersData || []).map(async (order) => {
      const { data: items } = await adminClient.from("order_items").select("*").eq("order_id", order.id)

      const { data: profile } = await adminClient
        .from("profiles")
        .select("name, email, phone, cpf")
        .eq("id", order.user_id)
        .single()

      return {
        ...order,
        items: items || [],
        customer: {
          name: profile?.name || "N/A",
          email: profile?.email || "N/A",
          phone: profile?.phone || "N/A",
          cpf: profile?.cpf || "N/A",
        },
      }
    }),
  )

  return ordersWithDetails
}
