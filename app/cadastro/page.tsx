"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/hooks/use-toast"
import { Loader2, User, Mail, Lock, Phone, CreditCard } from "lucide-react"

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpf: "",
    phone: "",
  })
  const [error, setError] = useState("")
  const { register, isLoading } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validações
    if (!formData.name || !formData.email || !formData.password) {
      setError("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    if (formData.password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.")
      return
    }

    if (formData.cpf && formData.cpf.replace(/\D/g, "").length !== 11) {
      setError("CPF inválido. Deve conter 11 dígitos.")
      return
    }

    if (formData.phone && formData.phone.replace(/\D/g, "").length < 10) {
      setError("Telefone inválido. Deve conter pelo menos 10 dígitos.")
      return
    }

    try {
      const success = await register(
        formData.name,
        formData.email,
        formData.password,
        formData.cpf || "",
        formData.phone || "",
      )

      if (success) {
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Verifique sua caixa de entrada para confirmar sua conta e poder fazer o login.",
          duration: 8000,
        })

        // Show success message on the page
        setError("")
        setFormData({ name: "", email: "", password: "", cpf: "", phone: "" })

        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push("/login")
        }, 3000)
      }
    } catch (err: any) {
      if (err.message === "EMAIL_EXISTS") {
        setError("Este e-mail já está cadastrado. Tente fazer login ou use outro e-mail.")
        toast({
          title: "E-mail já cadastrado",
          description: "Este e-mail já está em uso. Tente fazer login ou use outro e-mail.",
          variant: "destructive",
        })
      } else if (err.message === "CPF_EXISTS") {
        setError("Este CPF já está cadastrado. Cada CPF pode ter apenas uma conta.")
        toast({
          title: "CPF já cadastrado",
          description: "Este CPF já está em uso. Cada CPF pode ter apenas uma conta.",
          variant: "destructive",
        })
      } else {
        const errorMessage = err.message || ""
        if (errorMessage.includes("row-level security policy") || errorMessage.includes("violates")) {
          setError("Este CPF ou e-mail já está cadastrado. Cada CPF e e-mail pode ter apenas uma conta.")
          toast({
            title: "Dados já cadastrados",
            description: "Este CPF ou e-mail já está em uso. Tente fazer login ou use outros dados.",
            variant: "destructive",
          })
        } else {
          setError("Erro ao criar conta. Tente novamente.")
          toast({
            title: "Erro no cadastro",
            description: "Ocorreu um erro ao criar sua conta. Tente novamente.",
            variant: "destructive",
          })
        }
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Criar sua conta</h1>
            <p className="text-muted-foreground">Cadastre-se para acessar nossos cursos</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cadastro</CardTitle>
              <CardDescription>Preencha os dados abaixo para criar sua conta</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Mínimo 6 caracteres"
                      value={formData.password}
                      onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                      className="pl-10"
                      required
                      minLength={6}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF *</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="cpf"
                      type="text"
                      placeholder="000.000.000-00"
                      value={formData.cpf}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "")
                        const formatted = value
                          .replace(/(\d{3})(\d)/, "$1.$2")
                          .replace(/(\d{3})(\d)/, "$1.$2")
                          .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
                        setFormData((prev) => ({ ...prev, cpf: formatted }))
                      }}
                      className="pl-10"
                      maxLength={14}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "")
                        const formatted = value
                          .replace(/(\d{2})(\d)/, "($1) $2")
                          .replace(/(\d{5})(\d)/, "$1-$2")
                          .replace(/(-\d{4})\d+?$/, "$1")
                        setFormData((prev) => ({ ...prev, phone: formatted }))
                      }}
                      className="pl-10"
                      maxLength={15}
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md border border-destructive/20">
                    {error}
                  </div>
                )}

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
                    "Cadastrar"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Já tem uma conta?{" "}
                  <Link href="/login" className="text-primary font-medium hover:underline">
                    Entre
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <p className="text-xs text-muted-foreground">
              Ao criar uma conta, você concorda com nossos{" "}
              <Link href="/termos" className="text-primary hover:underline">
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link href="/privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
