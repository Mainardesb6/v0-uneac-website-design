"use client"

import { EbookCard } from "./ebook-card"
import { ebooks } from "@/lib/ebooks-data"

export function EbookGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {ebooks.map((ebook) => (
        <EbookCard key={ebook.id} ebook={ebook} />
      ))}
    </div>
  )
}
