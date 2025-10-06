"use client"

import { Button } from "@/components/ui/button"
import { X, ShoppingCart, Trash2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { state, dispatch } = useCart()

  const removeItem = (itemId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Carrinho de Compras</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {state.itemCount === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Seu carrinho está vazio</h3>
              <p className="text-muted-foreground mb-6">
                Adicione cursos ao seu carrinho para começar sua jornada de aprendizado.
              </p>
              <Button asChild onClick={onClose}>
                <Link href="/cursos">Explorar Cursos</Link>
              </Button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="bg-card border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm leading-tight mb-1">{item.title}</h3>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                        <span className="bg-secondary px-2 py-1 rounded">{item.category}</span>
                        <span>{item.hours} horas</span>
                      </div>
                      <div className="text-lg font-bold text-primary">R$ {item.price.toFixed(2)}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 ml-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.itemCount > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                {state.itemCount} {state.itemCount === 1 ? "item" : "itens"}
              </span>
              <div className="text-right">
                <div className="text-lg font-bold text-primary">R$ {state.total.toFixed(2)}</div>
                <div className="text-xs text-muted-foreground">Total</div>
              </div>
            </div>

            <div className="space-y-2">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" asChild>
                <Link href="/checkout" onClick={onClose}>
                  Finalizar Compra
                </Link>
              </Button>
              <Button variant="outline" className="w-full bg-transparent" onClick={onClose} asChild>
                <Link href="/cursos">Continuar Comprando</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
