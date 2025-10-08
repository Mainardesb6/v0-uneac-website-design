"use client"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Loader2, CheckCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const supabase = createClient()
      const { error: insertError } = await supabase.from("newsletter_subscribers").insert({ email })

      if (insertError) {
        if (insertError.code === "23505") {
          setError("Este e-mail já está cadastrado.")
        } else {
          setError("Erro ao cadastrar e-mail. Tente novamente.")
        }
      } else {
        setIsSubmitted(true)
        setEmail("")
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (err) {
      setError("Erro ao cadastrar e-mail. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 bg-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-balance">
                Fique por Dentro das Novidades
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground text-pretty">
                Cadastre seu e-mail e receba nossas promoções, lançamentos de cursos e notícias em primeira mão.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-4 space-y-3">
                  <div className="flex justify-center">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                  <div className="text-green-600 font-semibold text-lg">Obrigado por se inscrever!</div>
                  <p className="text-muted-foreground">Em breve você receberá nossas novidades.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {error && (
                    <div className="text-sm text-red-600 text-center p-3 bg-red-50 rounded border border-red-200">
                      {error}
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Cadastrando...
                        </>
                      ) : (
                        "Inscrever-se"
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
