import { MapPin } from "lucide-react"

export function LocationVideo() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nossa Localização</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Visite Nossa Sede</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Estamos localizados no coração de Jacarezinho, Paraná. Venha nos conhecer!
            </p>
          </div>

          <div className="aspect-[9/16] md:aspect-video max-w-md md:max-w-full mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.instagram.com/reel/DOJ65majxzw/embed"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Localização UNEAC"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-2">
              <strong>Endereço:</strong> Avenida Getúlio Vargas, 785 - Centro, Jacarezinho - PR
            </p>
            <p className="text-sm text-muted-foreground">Entre em contato conosco pelo WhatsApp: (43) 99643-0458</p>
          </div>
        </div>
      </div>
    </section>
  )
}
