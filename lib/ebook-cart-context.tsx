"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { type Ebook, calculateEbookPrice, ebookPricingTiers } from "./ebooks-data"

interface EbookCartContextType {
  selectedEbooks: Ebook[]
  addEbook: (ebook: Ebook) => void
  removeEbook: (ebookId: string) => void
  clearCart: () => void
  isSelected: (ebookId: string) => boolean
  toggleEbook: (ebook: Ebook) => void
  total: number
  savings: number
  quantity: number
  currentTier: typeof ebookPricingTiers[0] | null
  nextTier: typeof ebookPricingTiers[0] | null
  ebooksToNextTier: number
}

const EbookCartContext = createContext<EbookCartContextType | undefined>(undefined)

export function EbookCartProvider({ children }: { children: ReactNode }) {
  const [selectedEbooks, setSelectedEbooks] = useState<Ebook[]>([])

  const addEbook = useCallback((ebook: Ebook) => {
    setSelectedEbooks(prev => {
      if (prev.find(e => e.id === ebook.id)) return prev
      return [...prev, ebook]
    })
  }, [])

  const removeEbook = useCallback((ebookId: string) => {
    setSelectedEbooks(prev => prev.filter(e => e.id !== ebookId))
  }, [])

  const clearCart = useCallback(() => {
    setSelectedEbooks([])
  }, [])

  const isSelected = useCallback((ebookId: string) => {
    return selectedEbooks.some(e => e.id === ebookId)
  }, [selectedEbooks])

  const toggleEbook = useCallback((ebook: Ebook) => {
    setSelectedEbooks(prev => {
      if (prev.find(e => e.id === ebook.id)) {
        return prev.filter(e => e.id !== ebook.id)
      }
      return [...prev, ebook]
    })
  }, [])

  const quantity = selectedEbooks.length
  const { total } = calculateEbookPrice(quantity)
  
  // Calculate savings compared to buying individually
  const individualTotal = quantity * 19.99
  const savings = individualTotal - total

  // Find current and next tier
  const sortedTiers = [...ebookPricingTiers].sort((a, b) => a.quantity - b.quantity)
  const currentTier = sortedTiers.filter(t => t.quantity <= quantity).pop() || null
  const nextTier = sortedTiers.find(t => t.quantity > quantity) || null
  const ebooksToNextTier = nextTier ? nextTier.quantity - quantity : 0

  return (
    <EbookCartContext.Provider
      value={{
        selectedEbooks,
        addEbook,
        removeEbook,
        clearCart,
        isSelected,
        toggleEbook,
        total,
        savings,
        quantity,
        currentTier,
        nextTier,
        ebooksToNextTier
      }}
    >
      {children}
    </EbookCartContext.Provider>
  )
}

export function useEbookCart() {
  const context = useContext(EbookCartContext)
  if (context === undefined) {
    throw new Error("useEbookCart must be used within an EbookCartProvider")
  }
  return context
}
