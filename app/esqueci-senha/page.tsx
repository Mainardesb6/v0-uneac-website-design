"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Mail, ArrowLeft, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const { resetPassword, isLoading } = useAuth()
  const { toast } = useToast()

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, insira seu email.",
        variant: "destructive",
      })
      return
    }

    const success = await resetPassword(email)

    if (success) {
      setEmailSent(true)
      toast({
        title: "Email enviado!",
        description: "Verifique sua caixa de entrada para redefinir sua senha.",
      })
    } else {
      toast({
        title: "Erro ao enviar email",
        description: "Não foi possível enviar o email de redefinição. Tente novamente.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link
              href="/login"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para login
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Esqueci minha senha</h1>
            <p className="text-muted-foreground">
              {emailSent
                ? "Verifique seu email para continuar"
                : "Digite seu email para receber um link de redefinição"}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{emailSent ? "Email Enviado" : "Redefinir Senha"}</CardTitle>
              <CardDescription>
                {emailSent
                  ? "Um link de redefinição foi enviado para seu email"
                  : "Insira o email cadastrado em sua conta"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {emailSent ? (
                <div className="space-y-4">
                  <Alert className="border-green-500/50 bg-green-500/10">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertDescription className="text-green-700 dark:text-green-400">
                      Enviamos um email para <strong>{email}</strong> com instruções para redefinir sua senha. Verifique
                      sua caixa de entrada e spam.
                    </AlertDescription>
                  </Alert>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">Não recebeu o email?</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setEmailSent(false)
                        setEmail("")
                      }}
                      className="w-full"
                    >
                      Tentar novamente
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Enviaremos um link seguro para redefinir sua senha</p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Link de Redefinição"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
