"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Loader2, CheckCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

type NewsletterFormData = {
  email: string
}

export function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>()

  const onSubmit = async (data: NewsletterFormData) => {
    setIsLoading(true)
    setError("")

    try {
      const supabase = createClient()

      console.log("[v0] Newsletter subscription attempt:", data.email)

      const { error: insertError } = await supabase.from("newsletter_subscribers").insert({ email: data.email })

      console.log("[v0] Newsletter insert result:", insertError ? "Error" : "Success")

      if (insertError) {
        // Check if it's a duplicate email error
        if (insertError.code === "23505") {
          setError("Este e-mail já está cadastrado.")
        } else {
          console.error("[v0] Newsletter insert error:", insertError)
          throw insertError
        }
      } else {
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (err: any) {
      console.error("[v0] Newsletter subscription error:", err)
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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                  {error && (
                    <div className="text-sm text-red-600 text-center p-3 bg-red-50 rounded border border-red-200">
                      {error}
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <Input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        {...register("email", {
                          required: "E-mail é obrigatório",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "E-mail inválido",
                          },
                        })}
                        disabled={isLoading}
                      />
                      {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                    </div>
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
