"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useOrders } from "@/lib/orders-context"
import { useAuth } from "@/lib/auth-context"
import { CheckCircle, MessageCircle, Calendar, CreditCard, Package } from "lucide-react"
import type { Order } from "@/lib/orders-context"

export default function OrderPage({ params }: { params: { id: string } }) {
  const { orders } = useOrders()
  const { user } = useAuth()
  const router = useRouter()
  const [order, setOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    const foundOrder = orders.find((o) => o.id === params.id && o.userId === user.id)

    if (!foundOrder) {
      setTimeout(() => {
        const retryOrder = orders.find((o) => o.id === params.id && o.userId === user.id)
        if (!retryOrder) {
          router.push("/minha-conta")
        } else {
          setOrder(retryOrder)
          setIsLoading(false)
        }
      }, 1000)
      return
    }

    setOrder(foundOrder)
    setIsLoading(false)
  }, [orders, params.id, user, router])

  if (isLoading || !order) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Carregando pedido...</h2>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const whatsappMessage = `Olá! Gostaria de realizar o pagamento do meu pedido #${order.id}.`
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=5543996430458&text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">Pedido Registrado!</h1>
            <p className="text-muted-foreground">
              Seu pedido foi registrado com sucesso. Para concluir a matrícula, finalize o pagamento via WhatsApp.
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Pedido #{order.id}</CardTitle>
                  <CardDescription className="flex items-center space-x-2 mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>{order.createdAt.toLocaleDateString("pt-BR")}</span>
                  </CardDescription>
                </div>
                <Badge variant={order.status === "Aguardando Pagamento" ? "secondary" : "default"}>
                  {order.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center space-x-2">
                  <Package className="h-4 w-4" />
                  <span>Cursos Selecionados</span>
                </h3>
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                        <span className="bg-background px-2 py-1 rounded">{item.category}</span>
                        <span>{item.hours} horas</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">R$ {item.price.toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {order.items.length} {order.items.length === 1 ? "item" : "itens"}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">R$ {order.total.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">Total</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Instructions */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Próximos Passos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Como finalizar seu pedido:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
                  <li>Clique no botão "Pagar via WhatsApp" abaixo</li>
                  <li>Você será direcionado para nossa equipe no WhatsApp</li>
                  <li>
                    Informe o número do seu pedido: <strong>#{order.id}</strong>
                  </li>
                  <li>Nossa equipe irá orientá-lo sobre as formas de pagamento</li>
                  <li>Após a confirmação do pagamento, você receberá acesso aos cursos</li>
                </ol>
              </div>

              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Pagar via WhatsApp</span>
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/minha-conta">Ver Meus Pedidos</Link>
            </Button>
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/cursos">Continuar Comprando</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
