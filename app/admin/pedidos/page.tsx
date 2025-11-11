"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Eye, RefreshCw, FileText } from "lucide-react"
import { getOrdersWithProfiles } from "../actions"
import Link from "next/link"

interface OrderItem {
  id: number
  course_id: number
  title: string
  category: string
  hours: number
  price: number
}

interface Order {
  id: string
  user_id: string
  total: number
  status: string
  created_at: string
  updated_at: string
  items: OrderItem[]
  customer: {
    name: string
    email: string
    phone: string
    cpf: string
  }
}

export default function AdminPedidosPage() {
  const router = useRouter()
  const { user, isLoading: authLoading } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const loadingRef = useRef(false)

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    }
  }, [user, authLoading, router])

  useEffect(() => {
    async function checkAdminAndLoadOrders() {
      if (!user || loadingRef.current) return
      loadingRef.current = true

      const supabase = createClient()

      const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

      if (profile?.role !== "admin") {
        router.push("/")
        loadingRef.current = false
        return
      }

      setIsAdmin(true)
      await loadOrders()
      loadingRef.current = false
    }

    if (user && !loadingRef.current) {
      checkAdminAndLoadOrders()
    }
  }, [user, router])

  async function loadOrders() {
    setIsLoading(true)

    try {
      const ordersWithDetails = await getOrdersWithProfiles()
      setOrders(ordersWithDetails)
      setFilteredOrders(ordersWithDetails)
    } catch (error) {
      console.error("[v0 Admin] Erro ao carregar pedidos:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let filtered = orders

    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.customer.email.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((order) => order.status === statusFilter)
    }

    setFilteredOrders(filtered)
  }, [searchTerm, statusFilter, orders])

  async function updateOrderStatus(orderId: string, newStatus: string) {
    const supabase = createClient()

    const { error } = await supabase
      .from("orders")
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq("id", orderId)

    if (error) {
      console.error("Erro ao atualizar status:", error)
      return
    }

    await loadOrders()
  }

  function getStatusBadge(status: string) {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      "Aguardando Pagamento": "secondary",
      "Pagamento Confirmado": "default",
      Concluído: "outline",
      Cancelado: "destructive",
    }

    return <Badge variant={variants[status] || "default"}>{status}</Badge>
  }

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Carregando...</p>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Painel Administrativo</h1>
          <div className="flex gap-4 border-b">
            <Link href="/admin/pedidos">
              <Button variant="ghost" className="border-b-2 border-cyan-600 rounded-none">
                Gerenciamento de Pedidos
              </Button>
            </Link>
            <Link href="/admin/relatorios">
              <Button variant="ghost" className="rounded-none">
                <FileText className="h-4 w-4 mr-2" />
                Relatórios
              </Button>
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Gerenciamento de Pedidos</h2>
          <p className="text-muted-foreground">Acompanhe e gerencie todos os pedidos da UNEAC</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por ID, nome ou email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Status</SelectItem>
                  <SelectItem value="Aguardando Pagamento">Aguardando Pagamento</SelectItem>
                  <SelectItem value="Pagamento Confirmado">Pagamento Confirmado</SelectItem>
                  <SelectItem value="Concluído">Concluído</SelectItem>
                  <SelectItem value="Cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={loadOrders} variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Atualizar
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total de Pedidos</CardDescription>
              <CardTitle className="text-3xl">{orders.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Aguardando Pagamento</CardDescription>
              <CardTitle className="text-3xl">
                {orders.filter((o) => o.status === "Aguardando Pagamento").length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Pagamento Confirmado</CardDescription>
              <CardTitle className="text-3xl">
                {orders.filter((o) => o.status === "Pagamento Confirmado").length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Concluídos</CardDescription>
              <CardTitle className="text-3xl">{orders.filter((o) => o.status === "Concluído").length}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Pedidos ({filteredOrders.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID do Pedido</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-mono text-sm">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{order.customer.name}</p>
                          <p className="text-sm text-muted-foreground">{order.customer.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{new Date(order.created_at).toLocaleDateString("pt-BR")}</TableCell>
                      <TableCell>R$ {order.total.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => setSelectedOrder(order)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Select value={order.status} onValueChange={(value) => updateOrderStatus(order.id, value)}>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Aguardando Pagamento">Aguardando Pagamento</SelectItem>
                              <SelectItem value="Pagamento Confirmado">Pagamento Confirmado</SelectItem>
                              <SelectItem value="Concluído">Concluído</SelectItem>
                              <SelectItem value="Cancelado">Cancelado</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {selectedOrder && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Detalhes do Pedido #{selectedOrder.id}</CardTitle>
                <CardDescription>
                  Criado em {new Date(selectedOrder.created_at).toLocaleString("pt-BR")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Informações do Cliente</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Nome:</span>
                      <p className="font-medium">{selectedOrder.customer.name}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email:</span>
                      <p className="font-medium">{selectedOrder.customer.email}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Telefone:</span>
                      <p className="font-medium">{selectedOrder.customer.phone}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">CPF:</span>
                      <p className="font-medium">{selectedOrder.customer.cpf}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Itens do Pedido</h3>
                  <div className="space-y-2">
                    {selectedOrder.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-start p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.category} • {item.hours}h
                          </p>
                        </div>
                        <p className="font-semibold">R$ {item.price.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="font-semibold">Total</span>
                  <span className="text-2xl font-bold">R$ {selectedOrder.total.toFixed(2)}</span>
                </div>

                <Button onClick={() => setSelectedOrder(null)} className="w-full">
                  Fechar
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
