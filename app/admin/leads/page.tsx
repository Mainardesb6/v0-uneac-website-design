"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, MessageSquare, Calendar, Phone, CheckCircle2, Eye, Archive } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { updateContactMessageStatus } from "@/app/actions/leads"
import { useRouter } from "next/navigation"

interface NewsletterSubscriber {
  id: string
  email: string
  subscribed_at: string
  status: string
  source: string
}

interface ContactMessage {
  id: string
  name: string
  email: string
  phone: string | null
  message: string
  status: string
  created_at: string
}

export default function LeadsPage() {
  const router = useRouter()
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([])
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)
  const supabase = createClient()

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setIsLoading(true)

    console.log("[v0] Loading newsletter subscribers...")
    const { data: subscribersData, error: subscribersError } = await supabase
      .from("newsletter_subscribers")
      .select("*")
      .order("created_at", { ascending: false })

    if (subscribersError) {
      console.error("[v0] Error loading subscribers:", subscribersError)
    } else {
      console.log("[v0] Subscribers loaded:", subscribersData?.length || 0)
      setSubscribers(subscribersData || [])
    }

    console.log("[v0] Loading contact messages...")
    const { data: messagesData, error: messagesError } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false })

    if (messagesError) {
      console.error("[v0] Error loading messages:", messagesError)
    } else {
      console.log("[v0] Messages loaded:", messagesData?.length || 0)
      setMessages(messagesData || [])
    }

    setIsLoading(false)
  }

  async function handleUpdateStatus(id: string, status: string) {
    await updateContactMessageStatus(id, status)
    loadData()
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; label: string }> = {
      new: { variant: "default", label: "Nova" },
      read: { variant: "secondary", label: "Lida" },
      replied: { variant: "outline", label: "Respondida" },
      archived: { variant: "destructive", label: "Arquivada" },
    }
    const config = variants[status] || variants.new
    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  const newMessagesCount = messages.filter((m) => m.status === "new").length
  const activeSubscribersCount = subscribers.filter((s) => s.status === "active" || !s.status).length

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Gestão de Leads</h1>
            <p className="text-muted-foreground">Gerencie inscritos da newsletter e mensagens de contato</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Newsletter</p>
                    <p className="text-3xl font-bold">{activeSubscribersCount}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Mensagens Novas</p>
                    <p className="text-3xl font-bold">{newMessagesCount}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total de Mensagens</p>
                    <p className="text-3xl font-bold">{messages.length}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="messages" className="space-y-6">
            <TabsList>
              <TabsTrigger value="messages">
                Mensagens de Contato
                {newMessagesCount > 0 && (
                  <Badge variant="destructive" className="ml-2">
                    {newMessagesCount}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="newsletter">Newsletter ({activeSubscribersCount})</TabsTrigger>
            </TabsList>

            {/* Contact Messages Tab */}
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>Mensagens de Contato</CardTitle>
                  <CardDescription>
                    Visualize e gerencie as mensagens recebidas pelo formulário de contato
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="text-center py-8 text-muted-foreground">Carregando mensagens...</div>
                  ) : messages.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">Nenhuma mensagem recebida ainda</div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <Card key={message.id} className="border-border/50">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="font-semibold text-lg">{message.name}</h3>
                                  {getStatusBadge(message.status)}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Mail className="h-4 w-4" />
                                    {message.email}
                                  </div>
                                  {message.phone && (
                                    <div className="flex items-center gap-1">
                                      <Phone className="h-4 w-4" />
                                      {message.phone}
                                    </div>
                                  )}
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(message.created_at).toLocaleString("pt-BR")}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-muted/50 p-4 rounded-lg mb-4">
                              <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {message.status === "new" && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleUpdateStatus(message.id, "read")}
                                >
                                  <Eye className="h-4 w-4 mr-1" />
                                  Marcar como Lida
                                </Button>
                              )}
                              {(message.status === "new" || message.status === "read") && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleUpdateStatus(message.id, "replied")}
                                >
                                  <CheckCircle2 className="h-4 w-4 mr-1" />
                                  Marcar como Respondida
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleUpdateStatus(message.id, "archived")}
                              >
                                <Archive className="h-4 w-4 mr-1" />
                                Arquivar
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Newsletter Tab */}
            <TabsContent value="newsletter">
              <Card>
                <CardHeader>
                  <CardTitle>Inscritos na Newsletter</CardTitle>
                  <CardDescription>Lista de e-mails cadastrados para receber novidades</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="text-center py-8 text-muted-foreground">Carregando inscritos...</div>
                  ) : subscribers.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">Nenhum inscrito ainda</div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-semibold">E-mail</th>
                            <th className="text-left py-3 px-4 font-semibold">Data de Inscrição</th>
                            <th className="text-left py-3 px-4 font-semibold">Status</th>
                            <th className="text-left py-3 px-4 font-semibold">Origem</th>
                          </tr>
                        </thead>
                        <tbody>
                          {subscribers.map((subscriber) => (
                            <tr key={subscriber.id} className="border-b hover:bg-muted/50">
                              <td className="py-3 px-4">{subscriber.email}</td>
                              <td className="py-3 px-4">
                                {new Date(subscriber.subscribed_at || subscriber.created_at).toLocaleDateString(
                                  "pt-BR",
                                )}
                              </td>
                              <td className="py-3 px-4">
                                <Badge
                                  variant={
                                    subscriber.status === "active" || !subscriber.status ? "default" : "secondary"
                                  }
                                >
                                  {subscriber.status === "active" || !subscriber.status ? "Ativo" : "Inativo"}
                                </Badge>
                              </td>
                              <td className="py-3 px-4 capitalize">{subscriber.source || "website"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
