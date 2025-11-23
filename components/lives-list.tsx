"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Clock, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Live = {
  id: string
  title: string
  date: string
  views: string
  thumbnail: string
  youtubeUrl: string
}

const lives: Live[] = [
  {
    id: "lM7MJIFqVGs",
    title: "Do AEE à ABA: caminhos para uma escola mais inclusiva e responsiva às necessidades dos estudantes",
    date: "02/04/2026",
    views: "1,9 mil",
    thumbnail: "https://img.youtube.com/vi/lM7MJIFqVGs/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/lM7MJIFqVGs",
  },
  {
    id: "j9pWqjjDkgc",
    title: "Congresso Nacional de Educação Inclusiva: ABA e Acessibilidade em foco",
    date: "02/03/2026",
    views: "2,6 mil",
    thumbnail: "https://img.youtube.com/vi/j9pWqjjDkgc/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/j9pWqjjDkgc",
  },
  {
    id: "JhdmX3tfpjU",
    title:
      "Seminário de Educação Inclusiva: do planejamento educacional individualizado às estratégias nas dificuldades de aprendizagem e leitura",
    date: "02/02/2026",
    views: "2,8 mil",
    thumbnail: "https://img.youtube.com/vi/JhdmX3tfpjU/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/JhdmX3tfpjU",
  },
  {
    id: "EV2OtdNv_VY",
    title: "Aulão online sobre Gestão Escolar e Alfabetização na Prática",
    date: "01/12/2025",
    views: "2,3 mil",
    thumbnail: "https://img.youtube.com/vi/EV2OtdNv_VY/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/EV2OtdNv_VY",
  },
  {
    id: "_NMXP6RCg4U",
    title:
      "Práticas Educacionais Inclusivas: Estratégias para a Comunicação, Educação de Surdos e Ensino via Currículo Natural",
    date: "Há 2 semanas",
    views: "1,2 mil",
    thumbnail: "https://img.youtube.com/vi/_NMXP6RCg4U/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/_NMXP6RCg4U",
  },
  {
    id: "TAM4eGo2CPc",
    title: "Diálogos Inclusivos: acessibilidade curricular, autismo e altas habilidades/superdotação em foco",
    date: "Há 1 mês",
    views: "2,6 mil",
    thumbnail: "https://img.youtube.com/vi/TAM4eGo2CPc/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/TAM4eGo2CPc",
  },
  {
    id: "mOYXHfEzu9k",
    title:
      "Congresso Multidisciplinar de Educação: da Neurodiversidade às Inteligências Artificiais aplicadas no contexto XXI",
    date: "Há 2 meses",
    views: "2,8 mil",
    thumbnail: "https://img.youtube.com/vi/mOYXHfEzu9k/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/mOYXHfEzu9k",
  },
]

export function LivesList() {
  const [filter, setFilter] = useState<"all" | "recent" | "popular">("all")
  const [selectedLive, setSelectedLive] = useState<Live | null>(null)

  const filteredLives = lives.filter((live) => {
    if (filter === "recent") return lives.indexOf(live) < 3
    if (filter === "popular") {
      const viewCount = Number.parseInt(live.views.replace(/[^\d]/g, ""))
      return viewCount >= 2500
    }
    return true
  })

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <Badge variant="outline" className="mb-4 text-base px-4 py-2">
          Conteúdo Gratuito
        </Badge>
        <h2 className="text-3xl font-bold mb-4">Todas as Nossas Lives</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Selecione e assista qualquer live disponível em nosso acervo
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
          className={filter === "all" ? "bg-primary" : ""}
        >
          Todas as Lives
        </Button>
        <Button
          variant={filter === "recent" ? "default" : "outline"}
          onClick={() => setFilter("recent")}
          className={filter === "recent" ? "bg-primary" : ""}
        >
          Mais Recentes
        </Button>
        <Button
          variant={filter === "popular" ? "default" : "outline"}
          onClick={() => setFilter("popular")}
          className={filter === "popular" ? "bg-primary" : ""}
        >
          Mais Populares
        </Button>
      </div>

      {/* Video Player - Featured Live */}
      {selectedLive && (
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg border">
            <div className="aspect-video">
              <iframe
                src={selectedLive.youtubeUrl}
                title={selectedLive.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-balance">{selectedLive.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{selectedLive.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{selectedLive.views} visualizações</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLives.map((live) => (
          <div
            key={live.id}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border group cursor-pointer"
            onClick={() => setSelectedLive(live)}
          >
            <div className="relative aspect-video overflow-hidden bg-muted">
              <img
                src={live.thumbnail || "/placeholder.svg"}
                alt={live.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-base mb-3 line-clamp-2 text-balance group-hover:text-primary transition-colors">
                {live.title}
              </h3>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{live.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>{live.views} views</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <div className="bg-accent/10 rounded-lg p-8 border border-accent/20">
          <h3 className="text-2xl font-bold mb-3">Não perca nossas próximas lives!</h3>
          <p className="text-muted-foreground mb-6">
            Inscreva-se no nosso canal do YouTube e ative o sininho para receber notificações de todas as nossas
            transmissões ao vivo.
          </p>
          <Button asChild size="lg" className="bg-[#FF0000] hover:bg-[#CC0000] text-white">
            <a href="https://www.youtube.com/@cursosuneac2618" target="_blank" rel="noopener noreferrer">
              <Play className="mr-2 h-5 w-5" />
              Inscrever-se no YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
