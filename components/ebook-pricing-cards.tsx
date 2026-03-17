"use client"

import { Check, Sparkles, Star, Zap } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ebookPricingTiers } from "@/lib/ebooks-data"
import { cn } from "@/lib/utils"

const tierIcons = [
  <Zap key="zap" className="h-6 w-6" />,
  <Star key="star" className="h-6 w-6" />,
  <Sparkles key="sparkles" className="h-6 w-6" />
]

const tierColors = [
  "from-blue-500/10 to-blue-500/5 border-blue-500/20",
  "from-primary/20 to-primary/5 border-primary ring-2 ring-primary/20",
  "from-amber-500/10 to-amber-500/5 border-amber-500/20"
]

const tierHighlights = [
  "Experimente",
  "Mais Popular",
  "Melhor Economia"
]

export function EbookPricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {ebookPricingTiers.map((tier, index) => {
        const isPopular = index === 1
        const pricePerUnit = (tier.price / tier.quantity).toFixed(2).replace(".", ",")
        
        return (
          <Card
            key={tier.quantity}
            className={cn(
              "relative overflow-hidden bg-gradient-to-b transition-all duration-300 hover:shadow-lg",
              tierColors[index],
              isPopular && "scale-105 md:scale-110"
            )}
          >
            {isPopular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-bl-lg">
                {tierHighlights[index]}
              </div>
            )}
            {index === 2 && (
              <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                {tierHighlights[index]}
              </div>
            )}
            <CardHeader className="text-center pb-2 pt-6">
              <div className={cn(
                "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full",
                index === 0 && "bg-blue-500/10 text-blue-500",
                index === 1 && "bg-primary/10 text-primary",
                index === 2 && "bg-amber-500/10 text-amber-500"
              )}>
                {tierIcons[index]}
              </div>
              <h3 className="text-2xl font-bold">{tier.label}</h3>
              {index === 0 && (
                <p className="text-sm text-muted-foreground">Para começar</p>
              )}
            </CardHeader>
            <CardContent className="text-center space-y-4 pb-6">
              <div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-4xl font-bold">
                    {tier.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                {tier.quantity > 1 && (
                  <p className="text-sm text-muted-foreground mt-1">
                    R$ {pricePerUnit} por eBook
                  </p>
                )}
              </div>
              
              {tier.savings > 0 && (
                <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                  Economia de R$ {tier.savings.toFixed(2).replace(".", ",")}
                </Badge>
              )}
              
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{tier.quantity} eBook{tier.quantity > 1 ? "s" : ""} em PDF</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Envio por e-mail</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Conteúdo ilustrado</span>
                </li>
                {tier.quantity >= 3 && (
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Acesso vitalício</span>
                  </li>
                )}
                {tier.quantity >= 7 && (
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Suporte prioritário</span>
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
