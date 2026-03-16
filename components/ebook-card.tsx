"use client"

import Image from "next/image"
import { Check, Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useEbookCart } from "@/lib/ebook-cart-context"
import type { Ebook } from "@/lib/ebooks-data"

interface EbookCardProps {
  ebook: Ebook
}

export function EbookCard({ ebook }: EbookCardProps) {
  const { isSelected, toggleEbook } = useEbookCart()
  const selected = isSelected(ebook.id)

  return (
    <Card 
      className={cn(
        "group overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg",
        selected && "ring-2 ring-primary shadow-lg"
      )}
      onClick={() => toggleEbook(ebook)}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={ebook.image}
          alt={ebook.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div 
          className={cn(
            "absolute inset-0 bg-primary/20 transition-opacity duration-300",
            selected ? "opacity-100" : "opacity-0 group-hover:opacity-50"
          )}
        />
        <div 
          className={cn(
            "absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
            selected 
              ? "bg-primary text-primary-foreground" 
              : "bg-background/90 text-foreground group-hover:bg-primary group-hover:text-primary-foreground"
          )}
        >
          {selected ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </div>
        <Badge className="absolute bottom-3 left-3 bg-primary text-primary-foreground">
          {ebook.pages} cartões
        </Badge>
      </div>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{ebook.author}</p>
        <h3 className="font-semibold text-sm leading-snug mb-3 min-h-[4.5rem]">
          {ebook.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            R$ {ebook.price.toFixed(2).replace(".", ",")}
          </span>
          <Button
            size="sm"
            variant={selected ? "default" : "outline"}
            className="text-xs"
            onClick={(e) => {
              e.stopPropagation()
              toggleEbook(ebook)
            }}
          >
            {selected ? "Selecionado" : "Selecionar"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
