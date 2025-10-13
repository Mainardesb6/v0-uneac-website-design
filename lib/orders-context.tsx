"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import type { CartItem } from "@/lib/cart-context"
import { createClient } from "@/lib/supabase/client"

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: "Aguardando Pagamento" | "Pagamento Confirmado" | "Concluído" | "Cancelado"
  createdAt: Date
}

interface OrdersContextType {
  orders: Order[]
  createOrder: (userId: string, items: CartItem[], total: number) => Promise<Order>
  getOrdersByUser: (userId: string) => Promise<Order[]>
  updateOrderStatus: (orderId: string, status: Order["status"]) => Promise<void>
  refreshOrders: (userId: string) => Promise<void>
}

const OrdersContext = createContext<OrdersContextType | null>(null)

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([])
  const supabase = createClient()

  const createOrder = async (userId: string, items: CartItem[], total: number): Promise<Order> => {
    const orderId = Math.random().toString(36).substr(2, 6).toUpperCase()

    const { error: orderError } = await supabase.from("orders").insert({
      id: orderId,
      user_id: userId,
      total,
      status: "Aguardando Pagamento",
    })

    if (orderError) {
      console.error("[v0] Error creating order:", orderError)
      throw new Error("Erro ao criar pedido")
    }

    const orderItems = items.map((item) => ({
      order_id: orderId,
      course_id: item.courseId,
      title: item.title,
      category: item.category,
      hours: item.hours,
      price: item.price,
    }))

    const { error: itemsError } = await supabase.from("order_items").insert(orderItems)

    if (itemsError) {
      console.error("[v0] Error creating order items:", itemsError)
      throw new Error("Erro ao criar itens do pedido")
    }

    const order: Order = {
      id: orderId,
      userId,
      items,
      total,
      status: "Aguardando Pagamento",
      createdAt: new Date(),
    }

    setOrders((prev) => [order, ...prev])

    return order
  }

  const getOrdersByUser = async (userId: string): Promise<Order[]> => {
    const { data: ordersData, error: ordersError } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (ordersError) {
      console.error("[v0] Error fetching orders:", ordersError)
      return []
    }

    if (!ordersData || ordersData.length === 0) {
      return []
    }

    const ordersWithItems: Order[] = await Promise.all(
      ordersData.map(async (orderData) => {
        const { data: itemsData, error: itemsError } = await supabase
          .from("order_items")
          .select("*")
          .eq("order_id", orderData.id)

        if (itemsError) {
          console.error("[v0] Error fetching order items:", itemsError)
          return null
        }

        const items: CartItem[] = itemsData.map((item) => ({
          id: `${item.course_id}-${item.hours}`,
          courseId: item.course_id,
          title: item.title,
          category: item.category,
          hours: item.hours,
          price: Number(item.price),
        }))

        return {
          id: orderData.id,
          userId: orderData.user_id,
          items,
          total: Number(orderData.total),
          status: orderData.status as Order["status"],
          createdAt: new Date(orderData.created_at),
        }
      }),
    )

    const validOrders = ordersWithItems.filter((order): order is Order => order !== null)

    setOrders(validOrders)

    return validOrders
  }

  const updateOrderStatus = async (orderId: string, status: Order["status"]) => {
    const { error } = await supabase
      .from("orders")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", orderId)

    if (error) {
      console.error("[v0] Error updating order status:", error)
      throw new Error("Erro ao atualizar status do pedido")
    }

    setOrders((prev) => prev.map((order) => (order.id === orderId ? { ...order, status } : order)))
  }

  const refreshOrders = async (userId: string) => {
    await getOrdersByUser(userId)
  }

  return (
    <OrdersContext.Provider
      value={{
        orders,
        createOrder,
        getOrdersByUser,
        updateOrderStatus,
        refreshOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

export function useOrders() {
  const context = useContext(OrdersContext)
  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider")
  }
  return context
}
