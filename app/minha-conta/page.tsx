"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAuth } from "@/lib/auth-context"
import { useOrders } from "@/lib/orders-context"
import { User, Package, Calendar, ShoppingCart, MessageCircle, Loader2 } from "lucide-react"

export default function MyAccountPage() {
  const { user, isLoading: authLoading, logout } = useAuth()
  const { getOrdersByUser } = useOrders()
  const router = useRouter()
  const [orders, setOrders] = useState<any[]>([])
  const [isLoadingOrders, setIsLoadingOrders] = useState(true)

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    } else if (user) {
      loadOrders()
    }
  }, [user, authLoading, router])

  const loadOrders = async () => {
    if (!user) return

    setIsLoadingOrders(true)
    try {
      const userOrders = await getOrdersByUser(user.id)
      setOrders(userOrders)
    } catch (error) {
      console.error("[v0] Error loading orders:", error)
    } finally {
      setIsLoadingOrders(false)
    }
  }

  if (authLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 mx-auto text-primary mb-4 animate-spin" />
            <p className="text-muted-foreground">Carregando sua conta...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return null
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aguardando Pagamento":
        return "secondary"
      case "Pagamento Confirmado":
        return "default"
      case "Concluído":
        return "default"
      case "Cancelado":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getWhatsAppUrl = (orderId: string) => {
    const message = `Olá! Gostaria de realizar o pagamento referente ao pedido de número: ${orderId}`
    return `https://api.whatsapp.com/send/?phone=5543996430458&text=${encodeURIComponent(message)}`
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Minha Conta</h1>
            <p className="text-muted-foreground">Gerencie seus pedidos e informações pessoais</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - User Info */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Informações Pessoais</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Nome</label>
                    <p className="font-medium">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div className="pt-4 border-t">
                    <Button
                      variant="outline"
                      onClick={async () => {
                        await logout()
                        router.push("/")
                      }}
                      className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                    >
                      Sair da Conta
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/cursos" className="flex items-center justify-center space-x-2">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Ver Cursos</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a
                      href="https://api.whatsapp.com/send/?phone=5543996430458&text=Olá!%20Preciso%20de%20ajuda%20com%20minha%20conta."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Suporte</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Orders */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Package className="h-5 w-5" />
                    <span>Meus Pedidos</span>
                  </CardTitle>
                  <CardDescription>Histórico de todas as suas compras</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoadingOrders ? (
                    <div className="text-center py-8">
                      <Loader2 className="h-12 w-12 mx-auto text-muted-foreground mb-4 animate-spin" />
                      <p className="text-muted-foreground">Carregando pedidos...</p>
                    </div>
                  ) : orders.length === 0 ? (
                    <div className="text-center py-8">
                      <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Nenhum pedido encontrado</h3>
                      <p className="text-muted-foreground mb-6">
                        Você ainda não fez nenhuma compra. Explore nossos cursos e comece sua jornada de aprendizado!
                      </p>
                      <Button asChild>
                        <Link href="/cursos">Explorar Cursos</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div>
                                <h3 className="font-semibold">Pedido #{order.id}</h3>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4" />
                                  <span>{order.createdAt.toLocaleDateString("pt-BR")}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge variant={getStatusColor(order.status)}>{order.status}</Badge>
                              <div className="text-lg font-bold text-primary mt-1">R$ {order.total.toFixed(2)}</div>
                            </div>
                          </div>

                          <div className="space-y-2 mb-4">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex items-center justify-between text-sm">
                                <div className="flex-1">
                                  <span className="font-medium">{item.title}</span>
                                  <span className="text-muted-foreground ml-2">({item.hours}h)</span>
                                </div>
                                <span className="font-medium">R$ {item.price.toFixed(2)}</span>
                              </div>
                            ))}
                          </div>

                          {order.status === "Aguardando Pagamento" && (
                            <div className="flex flex-col sm:flex-row gap-2">
                              <Button size="sm" asChild className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                                <a
                                  href={getWhatsAppUrl(order.id)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center space-x-2"
                                >
                                  <MessageCircle className="h-4 w-4" />
                                  <span>Pagar via WhatsApp</span>
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
