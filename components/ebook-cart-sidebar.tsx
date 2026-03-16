"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ShoppingBag, Trash2, Tag, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useEbookCart } from "@/lib/ebook-cart-context"
import { ebookPricingTiers } from "@/lib/ebooks-data"
import { cn } from "@/lib/utils"

export function EbookCartSidebar() {
  const { 
    selectedEbooks, 
    removeEbook, 
    clearCart, 
    total, 
    savings, 
    quantity,
    currentTier,
    nextTier,
    ebooksToNextTier
  } = useEbookCart()

  const [isExpanded, setIsExpanded] = useState(true)

  // Calculate progress to next tier
  const progressToNextTier = nextTier 
    ? ((quantity - (currentTier?.quantity || 0)) / (nextTier.quantity - (currentTier?.quantity || 0))) * 100
    : 100

  return (
    <Card className="sticky top-24 border-2 border-primary/20 bg-gradient-to-b from-background to-muted/30">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Seus eBooks
            {quantity > 0 && (
              <Badge variant="secondary" className="ml-1">
                {quantity}
              </Badge>
            )}
          </CardTitle>
          {quantity > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearCart}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Pricing Tiers Display */}
        <div className="space-y-2 rounded-lg bg-muted/50 p-3">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Combos Disponíveis
          </p>
          <div className="space-y-1.5">
            {ebookPricingTiers.map((tier) => (
              <div
                key={tier.quantity}
                className={cn(
                  "flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors",
                  currentTier?.quantity === tier.quantity
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                <span className="flex items-center gap-1.5">
                  {currentTier?.quantity === tier.quantity && (
                    <Tag className="h-3.5 w-3.5" />
                  )}
                  {tier.label}
                </span>
                <span className="font-semibold">
                  R$ {tier.price.toFixed(2).replace(".", ",")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress to Next Tier */}
        {nextTier && quantity > 0 && (
          <div className="space-y-2 rounded-lg border border-dashed border-primary/30 bg-primary/5 p-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium">
                Faltam <span className="text-primary font-bold">{ebooksToNextTier}</span> para o combo de {nextTier.quantity}!
              </p>
            </div>
            <Progress value={progressToNextTier} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Economize R$ {nextTier.savings.toFixed(2).replace(".", ",")} no combo
            </p>
          </div>
        )}

        {/* Selected eBooks List */}
        {quantity > 0 ? (
          <>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {selectedEbooks.map((ebook) => (
                <div
                  key={ebook.id}
                  className="flex items-start gap-3 rounded-lg bg-background p-2 border"
                >
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={ebook.image}
                      alt={ebook.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium leading-tight line-clamp-2">
                      {ebook.title}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 flex-shrink-0 text-muted-foreground hover:text-destructive"
                    onClick={() => removeEbook(ebook.id)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-2 pt-2 border-t">
              {savings > 0 && (
                <div className="flex items-center justify-between text-sm text-green-600">
                  <span>Economia</span>
                  <span className="font-medium">
                    - R$ {savings.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">
                  R$ {total.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <Button asChild className="w-full" size="lg">
              <Link href={`/checkout?type=ebooks&ids=${selectedEbooks.map(e => e.id).join(",")}`}>
                Finalizar Compra
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </>
        ) : (
          <div className="text-center py-6">
            <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground/50 mb-3" />
            <p className="text-sm text-muted-foreground">
              Selecione os eBooks que deseja adquirir
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Clique nos cards para selecionar
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
