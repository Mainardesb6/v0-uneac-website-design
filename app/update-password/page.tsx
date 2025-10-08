"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
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

  // NOVO: Estado para controlar a verificação da sessão.
  // Começa como 'verifying' para mostrar ao usuário que algo está acontecendo.
  const [sessionStatus, setSessionStatus] = useState<"verifying" | "ready" | "expired">("verifying");

  const { toast } = useToast()
  const router = useRouter()
  const supabase = createClient() // Criar o cliente uma vez aqui

  // A LÓGICA CORRETA VAI AQUI
  useEffect(() => {
    // Escuta o evento de autenticação do Supabase.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      // Quando o Supabase lê o token #access_token da URL, ele dispara 'SIGNED_IN'.
      if (event === "SIGNED_IN" && session) {
        setSessionStatus("ready"); // Sessão pronta! Libera o formulário.
      } else if (event === "PASSWORD_RECOVERY") {
        // Este evento dispara no início do processo.
        setSessionStatus("verifying");
      }
    });

    // Adiciona um timeout para o caso de o link ser inválido/expirado e o evento 'SIGNED_IN' nunca ocorrer.
    const timer = setTimeout(() => {
        if (sessionStatus === 'verifying') {
            setSessionStatus('expired');
            setError("O link de redefinição de senha expirou ou é inválido. Solicite um novo link.");
        }
    }, 5000); // 5 segundos de tolerância

    return () => {
      subscription.unsubscribe();
      clearTimeout(timer);
    };
  }, [sessionStatus]); // Dependências corrigidas

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

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
      const { error: updateError } = await supabase.auth.updateUser({
        password: password,
      })

      if (updateError) {
        // Este erro geralmente acontece se o token já foi usado ou é inválido.
        throw new Error(updateError.message || "Não foi possível atualizar a senha. O link pode ser inválido.");
      }

      setIsSuccess(true)
      toast({
        title: "Senha atualizada com sucesso!",
        description: "Você já pode fazer login com sua nova senha.",
      })

      setTimeout(() => {
        router.push("/login")
      }, 2000)
    } catch (err: any) {
      setError(err.message)
      setSessionStatus("expired"); // Se deu erro, provavelmente o link é o problema.
      toast({
        title: "Erro ao atualizar senha",
        description: err.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Renderização condicional baseada no status da sessão
  const renderContent = () => {
    if (sessionStatus === "expired" || isSuccess) {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-center p-6">
            {isSuccess ? (
                <CheckCircle className="h-16 w-16 text-green-500" />
            ) : (
                <AlertCircle className="h-16 w-16 text-destructive" />
            )}
          </div>
          <p className="text-center text-muted-foreground">
            {isSuccess
              ? "Sua senha foi atualizada. Redirecionando..."
              : error}
          </p>
          <Button
            onClick={() => router.push(isSuccess ? "/login" : "/esqueci-senha")}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {isSuccess ? "Ir para Login" : "Solicitar Novo Link"}
          </Button>
        </div>
      );
    }
    
    if (sessionStatus === "verifying") {
      return (
        <div className="flex flex-col items-center justify-center space-y-4 p-6">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Verificando link de redefinição...</p>
        </div>
      )
    }

    // Se sessionStatus === "ready"
    return (
      <form onSubmit={handleUpdatePassword} className="space-y-4">
        {/* Seus Inputs de senha e botão de submit aqui */}
        <div className="space-y-2">
            <Label htmlFor="password">Nova Senha</Label>
            <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="password" type="password" placeholder="Mínimo 6 caracteres" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10" required minLength={6} />
            </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
            <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="confirmPassword" type="password" placeholder="Digite a senha novamente" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="pl-10" required minLength={6} />
            </div>
        </div>
        {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md border border-destructive/20">{error}</div>
        )}
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
            {isLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Atualizando...</>) : ("Atualizar Senha")}
        </Button>
      </form>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                {isSuccess ? "Sucesso!" : sessionStatus === 'expired' ? "Link Expirado" : "Redefinir Senha"}
              </CardTitle>
              <CardDescription>
                {isSuccess
                  ? "Você será redirecionado em instantes"
                  : sessionStatus === 'expired'
                  ? "Solicite um novo link para continuar"
                  : sessionStatus === 'verifying'
                  ? "Aguarde um momento..."
                  : "Digite sua nova senha"}
              </CardDescription>
            </CardHeader>
            <CardContent>{renderContent()}</CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
