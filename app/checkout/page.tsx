"use client"

import { useEffect, useState, useCallback, FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"
import { useOrders } from "@/lib/orders-context"
import { useToast } from "@/hooks/use-toast"
import { Loader2, User, Mail, Lock, ShoppingCart, Phone, CreditCard } from "lucide-react"

export default function CheckoutPage() {
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "", cpf: "", phone: "" })
  const [activeTab, setActiveTab] = useState("login")
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderCreated, setOrderCreated] = useState(false)
  const { user, login, register, isLoading } = useAuth()
  const { state: cartState, dispatch: cartDispatch } = useCart()
  const { createOrder } = useOrders()
  const { toast } = useToast()
  const router = useRouter()

  const handleLogin = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const success = await login(loginData.email, loginData.password)

      if (success) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Processando seu pedido...",
        })
      } else {
        toast({
          title: "Erro ao fazer login",
          description: "Email ou senha incorretos. Tente novamente.",
          variant: "destructive",
        })
      }
    },
    [loginData.email, loginData.password, login, toast],
  )

  const handleRegister = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const success = await register(
        registerData.name,
        registerData.email,
        registerData.password,
        registerData.cpf,
        registerData.phone,
      )

      if (success) {
        toast({
          title: "Conta criada com sucesso!",
          description: "Processando seu pedido...",
        })
      } else {
        toast({
          title: "Erro ao criar conta",
          description: "Não foi possível criar sua conta. Tente novamente.",
          variant: "destructive",
        })
      }
    },
    [
      registerData.name,
      registerData.email,
      registerData.password,
      registerData.cpf,
      registerData.phone,
      register,
      toast,
    ],
  )

  useEffect(() => {
    if (cartState.itemCount === 0) {
      router.push("/cursos")
    }
  }, [cartState.itemCount, router])

  const handleCreateOrder = useCallback(async () => {
    if (!user || cartState.itemCount === 0 || isProcessing || orderCreated) return

    setIsProcessing(true)

    try {
      const order = await createOrder(user.id, cartState.items, cartState.total)

      setOrderCreated(true)
      cartDispatch({ type: "CLEAR_CART" })

      toast({
        title: "Pedido criado com sucesso!",
        description: `Pedido #${order.id} registrado. Redirecionando para seus pedidos...`,
      })

      await new Promise((resolve) => setTimeout(resolve, 1000))
      router.push("/minha-conta")
    } catch (error) {
      console.error("[v0] Error creating order:", error)
      toast({
        title: "Erro ao criar pedido",
        description: "Ocorreu um erro ao processar seu pedido. Tente novamente.",
        variant: "destructive",
      })
      setIsProcessing(false)
    }
  }, [
    user,
    cartState.items,
    cartState.itemCount,
    cartState.total,
    isProcessing,
    orderCreated,
    createOrder,
    cartDispatch,
    toast,
    router,
  ])

  useEffect(() => {
    if (user && cartState.itemCount > 0 && !isProcessing && !orderCreated) {
      handleCreateOrder()
    }
  }, [user, cartState.itemCount, isProcessing, orderCreated, handleCreateOrder])

  if (cartState.itemCount === 0) {
    return null
  }

  if (user && isProcessing) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Processando seu pedido...</h2>
            <p className="text-muted-foreground">Aguarde um momento</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Resumo do Pedido</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartState.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.title}</h3>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                          <span className="bg-secondary px-2 py-1 rounded">{item.category}</span>
                          <span>{item.hours} horas</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">R$ {item.price.toFixed(2)}</div>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {cartState.itemCount} {cartState.itemCount === 1 ? "item" : "itens"}
                      </span>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">R$ {cartState.total.toFixed(2)}</div>
                        <div className="text-xs text-muted-foreground">Total</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-primary mb-2">Finalizar Compra</h1>
                <p className="text-muted-foreground">Entre ou crie uma conta para continuar</p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Já sou cliente</TabsTrigger>
                  <TabsTrigger value="register">Quero me cadastrar</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <Card>
                    <CardHeader>
                      <CardTitle>Fazer Login</CardTitle>
                      <CardDescription>Entre com seu email e senha</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="login-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="login-email"
                              type="email"
                              placeholder="seu@email.com"
                              value={loginData.email}
                              onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="login-password">Senha</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="login-password"
                              type="password"
                              placeholder="Sua senha"
                              value={loginData.password}
                              onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Entrando...
                            </>
                          ) : (
                            "Entrar e Continuar"
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="register">
                  <Card>
                    <CardHeader>
                      <CardTitle>Criar Conta</CardTitle>
                      <CardDescription>Preencha seus dados para criar uma conta</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleRegister} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="register-name">Nome Completo</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="register-name"
                              type="text"
                              placeholder="Seu nome completo"
                              value={registerData.name}
                              onChange={(e) => setRegisterData((prev) => ({ ...prev, name: e.target.value }))}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="register-email"
                              type="email"
                              placeholder="seu@email.com"
                              value={registerData.email}
                              onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-cpf">CPF</Label>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="register-cpf"
                              type="text"
                              placeholder="000.000.000-00"
                              value={registerData.cpf}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "")
                                const formatted = value
                                  .replace(/(\d{3})(\d)/, "$1.$2")
                                  .replace(/(\d{3})(\d)/, "$1.$2")
                                  .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
                                setRegisterData((prev) => ({ ...prev, cpf: formatted }))
                              }}
                              className="pl-10"
                              maxLength={14}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-phone">Telefone</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="register-phone"
                              type="tel"
                              placeholder="(00) 00000-0000"
                              value={registerData.phone}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "")
                                const formatted = value
                                  .replace(/(\d{2})(\d)/, "($1) $2")
                                  .replace(/(\d{5})(\d)/, "$1-$2")
                                  .replace(/(-\d{4})\d+?$/, "$1")
                                setRegisterData((prev) => ({ ...prev, phone: formatted }))
                              }}
                              className="pl-10"
                              maxLength={15}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-password">Criar Senha</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="register-password"
                              type="password"
                              placeholder="Mínimo 6 caracteres"
                              value={registerData.password}
                              onChange={(e) => setRegisterData((prev) => ({ ...prev, password: e.target.value }))}
                              className="pl-10"
                              required
                              minLength={6}
                            />
                          </div>
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Criando conta...
                            </>
                          ) : (
                            "Criar Conta e Continuar"
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
