import { MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationVideo() {
  // Coordenadas da UNEAC em Jacarezinho, PR
  const address = "Avenida Getulio Vargas, 785 - Centro, Jacarezinho - PR"
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=UNEAC+Jacarezinho+PR"
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.7!2d-49.969!3d-23.162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA5JzQzLjIiUyA0OcKwNTgnMDguNCJX!5e0!3m2!1spt-BR!2sbr!4v1"

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">Nossa Localizacao</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Visite Nossa Sede</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Estamos localizados no coracao de Jacarezinho, Parana. Venha nos conhecer!
            </p>
          </div>

          <div className="aspect-video max-w-full mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa mostrando a localizacao da UNEAC em ${address}`}
            />
          </div>

          <div className="mt-8 text-center space-y-4">
            <p className="text-muted-foreground">
              <strong>Endereco:</strong> {address}
            </p>
            <p className="text-sm text-muted-foreground">Entre em contato conosco pelo WhatsApp: (43) 99643-0458</p>
            <Button asChild variant="outline" className="mt-4">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Abrir localizacao da UNEAC no Google Maps em nova aba"
              >
                <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
                Ver no Google Maps
                <ExternalLink className="h-4 w-4 ml-2" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
