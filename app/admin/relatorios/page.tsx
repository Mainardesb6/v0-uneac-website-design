"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Download, BarChart3 } from "lucide-react"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import Link from "next/link"
import { getOrdersWithProfiles } from "../actions"

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

export default function AdminRelatóriosPage() {
  const router = useRouter()
  const { user, isLoading: authLoading } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    }
  }, [user, authLoading, router])

  useEffect(() => {
    async function checkAdminAndLoadOrders() {
      if (!user) return

      const supabase = createClient()
      const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

      if (profile?.role !== "admin") {
        router.push("/")
        return
      }

      setIsAdmin(true)
      await loadOrders()
    }

    if (user) {
      checkAdminAndLoadOrders()
    }
  }, [user, router])

  async function loadOrders() {
    setIsLoading(true)
    try {
      const ordersWithDetails = await getOrdersWithProfiles()
      setOrders(ordersWithDetails)
    } catch (error) {
      console.error("[v0] Erro ao carregar pedidos:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const totalOrders = orders.length
  const pendingPayment = orders.filter((o) => o.status === "Aguardando Pagamento").length
  const confirmedPayment = orders.filter((o) => o.status === "Pagamento Confirmado").length
  const completed = orders.filter((o) => o.status === "Concluído").length
  const totalRevenue = orders.reduce((acc, order) => acc + order.total, 0)

  async function generatePDF() {
    setIsGeneratingPDF(true)
    try {
      const doc = new jsPDF()

      // Header
      doc.setFontSize(20)
      doc.text("Relatório de Pedidos - UNEAC", 14, 22)

      doc.setFontSize(10)
      doc.setTextColor(100)
      doc.text(`Gerado em: ${new Date().toLocaleString("pt-BR")}`, 14, 32)
      doc.setTextColor(0)

      // Statistics Cards
      doc.setFontSize(12)
      doc.text("Resumo Executivo", 14, 45)

      const statsY = 55
      const statsHeight = 18
      const statBoxWidth = 42
      const stats = [
        { label: "Total de Pedidos", value: totalOrders.toString(), x: 14 },
        { label: "Aguardando Pagamento", value: pendingPayment.toString(), x: 60 },
        { label: "Pagamento Confirmado", value: confirmedPayment.toString(), x: 106 },
        { label: "Concluídos", value: completed.toString(), x: 152 },
      ]

      stats.forEach((stat) => {
        doc.rect(stat.x, statsY, statBoxWidth, statsHeight, "S")
        doc.setFontSize(10)
        doc.text(stat.label, stat.x + 2, statsY + 6)
        doc.setFontSize(14)
        doc.setFont(undefined, "bold")
        doc.text(stat.value, stat.x + 2, statsY + 13)
        doc.setFont(undefined, "normal")
      })

      // Total Revenue
      doc.setFontSize(12)
      doc.setFont(undefined, "bold")
      doc.text(`Receita Total: R$ ${totalRevenue.toFixed(2)}`, 14, statsY + 28)
      doc.setFont(undefined, "normal")

      // Orders Table
      doc.setFontSize(12)
      doc.text("Detalhes dos Pedidos", 14, statsY + 42)

      const tableData = orders.map((order) => [
        order.id,
        order.customer.name,
        new Date(order.created_at).toLocaleDateString("pt-BR"),
        order.status,
        `R$ ${order.total.toFixed(2)}`,
      ])

      autoTable(doc, {
        head: [["ID do Pedido", "Cliente", "Data", "Status", "Total"]],
        body: tableData,
        startY: statsY + 48,
        margin: { left: 14, right: 14 },
        styles: {
          fontSize: 9,
          cellPadding: 3,
        },
        headStyles: {
          fillColor: [0, 169, 224],
          textColor: 255,
          fontStyle: "bold",
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245],
        },
      })

      // Footer
      const pageCount = (doc as any).internal.getNumberOfPages()
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        doc.setFontSize(8)
        doc.setTextColor(150)
        doc.text(
          `Página ${i} de ${pageCount}`,
          doc.internal.pageSize.getWidth() / 2,
          doc.internal.pageSize.getHeight() - 10,
          { align: "center" },
        )
      }

      doc.save(`relatorio-pedidos-${new Date().toISOString().split("T")[0]}.pdf`)
    } catch (error) {
      console.error("[v0] Erro ao gerar PDF:", error)
    } finally {
      setIsGeneratingPDF(false)
    }
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
        {/* Navigation Tabs */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Painel Administrativo</h1>
          <div className="flex gap-4 border-b">
            <Link href="/admin/pedidos">
              <Button variant="ghost" className="rounded-none">
                Gerenciamento de Pedidos
              </Button>
            </Link>
            <Link href="/admin/relatorios">
              <Button variant="ghost" className="border-b-2 border-cyan-600 rounded-none">
                <BarChart3 className="h-4 w-4 mr-2" />
                Relatórios
              </Button>
            </Link>
          </div>
        </div>

        {/* Relatórios Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Relatórios de Pedidos</h2>
          <p className="text-muted-foreground">Visualize e exporte relatórios detalhados de pedidos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total de Pedidos</CardDescription>
              <CardTitle className="text-3xl">{totalOrders}</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Aguardando Pagamento</CardDescription>
              <CardTitle className="text-3xl text-yellow-600">{pendingPayment}</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Pagamento Confirmado</CardDescription>
              <CardTitle className="text-3xl text-blue-600">{confirmedPayment}</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Concluídos</CardDescription>
              <CardTitle className="text-3xl text-green-600">{completed}</CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Receita Total</CardDescription>
              <CardTitle className="text-2xl">R$ {totalRevenue.toFixed(2)}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Exportar Relatório</CardTitle>
                <CardDescription>Baixe um relatório completo em PDF com todos os pedidos</CardDescription>
              </div>
              <Button onClick={generatePDF} disabled={isGeneratingPDF} size="lg">
                <Download className="h-4 w-4 mr-2" />
                {isGeneratingPDF ? "Gerando..." : "Baixar PDF"}
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Distribuição de Pedidos por Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Aguardando Pagamento</span>
                  <Badge variant="secondary">{pendingPayment}</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: `${totalOrders > 0 ? (pendingPayment / totalOrders) * 100 : 0}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Pagamento Confirmado</span>
                  <Badge>{confirmedPayment}</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${totalOrders > 0 ? (confirmedPayment / totalOrders) * 100 : 0}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Concluídos</span>
                  <Badge variant="outline">{completed}</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${totalOrders > 0 ? (completed / totalOrders) * 100 : 0}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
