"use client"

import Image from "next/image"
import { Check, Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={ebook.image}
          alt={ebook.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div 
          className={cn(
            "absolute inset-0 bg-primary/20 transition-opacity duration-300",
            selected ? "opacity-100" : "opacity-0 group-hover:opacity-50"
          )}
        />
        <div 
          className={cn(
            "absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
            selected 
              ? "bg-primary text-primary-foreground" 
              : "bg-background/90 text-foreground group-hover:bg-primary group-hover:text-primary-foreground"
          )}
        >
          {selected ? <Check className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-2">{ebook.author}</p>
        <h3 className="font-semibold text-lg leading-snug mb-4">
          {ebook.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            R$ {ebook.price.toFixed(2).replace(".", ",")}
          </span>
          <Button
            size="lg"
            variant={selected ? "default" : "outline"}
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
