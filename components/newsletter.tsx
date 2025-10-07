"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { subscribeNewsletter } from "@/app/actions/leads"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const result = await subscribeNewsletter(email)

    if (result.success) {
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 5000)
    } else {
      setError(result.error || "Erro ao cadastrar e-mail.")
    }

    setIsLoading(false)
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
                <div className="text-center py-4">
                  <div className="text-green-600 font-semibold mb-2">Obrigado por se inscrever!</div>
                  <p className="text-muted-foreground">Em breve você receberá nossas novidades.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {error && <div className="text-sm text-red-600 text-center p-2 bg-red-50 rounded">{error}</div>}
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
                      {isLoading ? "Cadastrando..." : "Inscrever-se"}
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
