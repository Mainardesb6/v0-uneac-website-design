"use client"

import { EbookCard } from "./ebook-card"
import { ebooks } from "@/lib/ebooks-data"

export function EbookGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ebooks.map((ebook) => (
        <EbookCard key={ebook.id} ebook={ebook} />
      ))}
    </div>
  )
}
