"use client"
import { useState, type FormEvent } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Loader2, CheckCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

type ContactFormData = {
  name: string
  email: string
  phone?: string
  message: string
}

export default function ContatoPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    console.log("[v0 Contact] Starting submission")
    console.log("[v0 Contact] Data:", { name, email, phone, message })

    try {
      const supabase = createClient()
      console.log("[v0 Contact] Supabase client created")

      const { error: insertError } = await supabase.from("contact_messages").insert({
        name,
        email,
        phone: phone || null,
        message,
        status: "new",
      })

      console.log("[v0 Contact] Insert result:", { insertError })

      if (insertError) {
        console.error("[v0 Contact] Insert error:", insertError)
        setError(`Erro ao enviar mensagem: ${insertError.message}`)
      } else {
        console.log("[v0 Contact] Success!")
        setIsSubmitted(true)
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (err) {
      console.error("[v0 Contact] Catch error:", err)
      setError("Erro ao enviar mensagem. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contato</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entre em contato conosco. Estamos aqui para esclarecer suas dúvidas e ajudá-lo a escolher o melhor curso
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8 space-y-3">
                        <div className="flex justify-center">
                          <CheckCircle className="h-12 w-12 text-green-500" />
                        </div>
                        <div className="text-green-600 font-semibold text-lg">Mensagem enviada com sucesso!</div>
                        <p className="text-muted-foreground">Retornaremos em breve.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                          <div className="text-sm text-red-600 p-3 bg-red-50 rounded border border-red-200">
                            {error}
                          </div>
                        )}
                        <Input
                          placeholder="Seu nome completo"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          disabled={isLoading}
                        />
                        <Input
                          type="email"
                          placeholder="Seu e-mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isLoading}
                        />
                        <Input
                          type="tel"
                          placeholder="Seu telefone (opcional)"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          disabled={isLoading}
                        />
                        <Textarea
                          placeholder="Sua mensagem"
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          disabled={isLoading}
                        />
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            "Enviar Mensagem"
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Outras Formas de Contato</h2>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <p className="text-muted-foreground">+55 (43) 99643-0458</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Atendimento de segunda a sexta, das 8h às 18h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">E-mail</h3>
                        <p className="text-muted-foreground">cursosjacarezinho@gmail.com</p>
                        <p className="text-sm text-muted-foreground mt-1">Resposta em até 24 horas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Endereço</h3>
                        <p className="text-muted-foreground">Cursos 100% Online</p>
                        <p className="text-sm text-muted-foreground mt-1">Atendemos todo o território nacional</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
