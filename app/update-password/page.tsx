"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Lock, CheckCircle, AlertCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [linkExpired, setLinkExpired] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const errorParam = searchParams.get("error")
    const errorCode = searchParams.get("error_code")
    const errorDescription = searchParams.get("error_description")

    if (errorParam === "access_denied" && errorCode === "otp_expired") {
      setLinkExpired(true)
      setError("O link de redefinição de senha expirou ou é inválido. Solicite um novo link.")
    } else if (errorParam) {
      setLinkExpired(true)
      setError(errorDescription || "Link inválido. Solicite um novo link de redefinição.")
    }
  }, [searchParams])

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validações
    if (!password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.")
      return
    }

    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.")
      return
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.")
      return
    }

    setIsLoading(true)

    try {
      const supabase = createClient()

      const { error: updateError } = await supabase.auth.updateUser({
        password: password,
      })

      if (updateError) {
        throw updateError
      }

      setIsSuccess(true)
      toast({
        title: "Senha atualizada com sucesso!",
        description: "Você já pode fazer login com sua nova senha.",
      })

      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push("/login")
      }, 2000)
    } catch (err: any) {
      setError("Erro ao atualizar senha. O link pode ter expirado. Tente solicitar um novo link.")
      toast({
        title: "Erro ao atualizar senha",
        description: "O link pode ter expirado. Tente solicitar um novo link de redefinição.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Redefinir Senha</h1>
            <p className="text-muted-foreground">
              {isSuccess ? "Senha atualizada com sucesso!" : linkExpired ? "Link expirado" : "Digite sua nova senha"}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{isSuccess ? "Sucesso!" : linkExpired ? "Link Expirado" : "Nova Senha"}</CardTitle>
              <CardDescription>
                {isSuccess
                  ? "Você será redirecionado para a página de login"
                  : linkExpired
                    ? "Solicite um novo link de redefinição de senha"
                    : "Escolha uma senha forte com no mínimo 6 caracteres"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {linkExpired ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center p-6">
                    <AlertCircle className="h-16 w-16 text-destructive" />
                  </div>
                  <div className="bg-destructive/10 text-destructive text-sm p-4 rounded-md border border-destructive/20 text-center">
                    {error}
                  </div>
                  <p className="text-center text-muted-foreground text-sm">
                    Os links de redefinição de senha expiram após 1 hora por segurança. Solicite um novo link para
                    continuar.
                  </p>
                  <Button
                    onClick={() => router.push("/esqueci-senha")}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Solicitar Novo Link
                  </Button>
                  <div className="text-center">
                    <Link href="/login" className="text-sm text-primary hover:underline">
                      Voltar para o login
                    </Link>
                  </div>
                </div>
              ) : isSuccess ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center p-6">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <p className="text-center text-muted-foreground">
                    Sua senha foi atualizada com sucesso. Redirecionando para o login...
                  </p>
                  <Button
                    onClick={() => router.push("/login")}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Ir para Login
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleUpdatePassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Nova Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Mínimo 6 caracteres"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                        minLength={6}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Digite a senha novamente"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10"
                        required
                        minLength={6}
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
                        Atualizando senha...
                      </>
                    ) : (
                      "Atualizar Senha"
                    )}
                  </Button>

                  <div className="text-center">
                    <Link href="/esqueci-senha" className="text-sm text-primary hover:underline">
                      Solicitar novo link de redefinição
                    </Link>
                  </div>
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
