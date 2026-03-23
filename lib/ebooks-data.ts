export interface Ebook {
  id: string
  title: string
  description: string
  image: string
  author: string
  category: string
  pages: number
  price: number
}

export const ebooks: Ebook[] = [
  {
    id: "ebook-1",
    title: "Desvendando o Cérebro Autista: Aprendizagem e Funções Cognitivas",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/cerebro-autista-aprendizagem.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-2",
    title: "Transtorno do Espectro Autista: Diagnóstico, Níveis de Suporte, Neurobiologia e Comorbidades",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/tea-diagnostico-neurobiologia.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-3",
    title: "Estimulando a Autonomia: Um Guia Prático de Autocuidado para o TEA",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/autonomia-autocuidado-tea.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-4",
    title: "Desvendando a Memória de Longo Prazo Declarativa: Episódica e Semântica",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/memoria-longo-prazo-declarativa.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-5",
    title: "Sistemas Sensoriais e Autismo: Entendendo a Disfunção Sensorial em Profundidade",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/sistemas-sensoriais-autismo.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-6",
    title: "Como Nosso Cérebro Aprende",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/como-cerebro-aprende.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-7",
    title: "Desfralde no Autismo: Guia Completo Passo a Passo",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/desfralde-autismo.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-8",
    title: "Memória Procedural de Longo Prazo: Habilidades que Duram",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/memoria-procedural-longo-prazo.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-9",
    title: "A Atenção: A Chave para a Aprendizagem e o Desempenho",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/atencao-aprendizagem-desempenho.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-10",
    title: "Aromaterapia e Seus Benefícios no Autismo, a relação entre Olfato e Sistema Límbico",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/aromaterapia-autismo.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-11",
    title: "Fundamentos da Análise do Comportamento: Tríplice Contingência, Crise, Birra e Autismo",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/fundamentos-analise-comportamento.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 10,
    price: 19.99
  },
  {
    id: "ebook-12",
    title: "As Funções Executivas: O Maestro da Aprendizagem",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/funcoes-executivas-maestro.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-13",
    title: "Memória de Longo Prazo Prospectiva: Construindo o Futuro na Sala de Aula",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/memoria-prospectiva-futuro.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-14",
    title: "Percepção: A Janela para o Aprendizado",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/percepcao-janela-aprendizado.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-15",
    title: "Memória de Curto Prazo: O Bloco de Notas Mental da Sala de Aula",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/memoria-curto-prazo-bloco-notas.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-16",
    title: "Plano de Contingência para Crises Hétero-lesivas em Autistas Nível 3",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/plano-contingencia-crises.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-17",
    title: "Cognição Social e Autismo: Entendendo, Estimulando e Inserindo no Meio Social",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/cognicao-social-autismo.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-18",
    title: "A Fase Pré-Silábica na Psicogênese da Língua Escrita",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/fase-pre-silabica-psicogenese.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-19",
    title: "A Fase Silábica na Psicogênese da Língua Escrita",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/fase-silabica-psicogenese.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-20",
    title: "A Fase Silábica-Alfabética",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/fase-silabica-alfabetica.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-21",
    title: "A Psicogênese da Língua Escrita: Desvendando o Caminho da Alfabetização",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/psicogenese-lingua-escrita-alfabetizacao.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-22",
    title: "A Fase Icônica da Psicogênese da Língua Escrita",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/fase-iconica-psicogenese.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-23",
    title: "Garatuja: Desvendando a Fase Pré-Silábica da Escrita",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/garatuja-fase-pre-silabica.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  },
  {
    id: "ebook-24",
    title: "A Fase Alfabética da Psicogênese da Língua Escrita",
    description: "Receba em seu e-mail o PDF completo deste conteúdo para se aprofundar ainda mais no tema. Nosso eBook é ilustrado, comentado e totalmente atualizado, pensado para facilitar a compreensão e tornar o aprendizado mais dinâmico e prático.",
    image: "/images/ebooks/fase-alfabetica-psicogenese.jpg",
    author: "Profª Juliana Moraes",
    category: "Educação e Saúde",
    pages: 20,
    price: 19.99
  }
]

// Pricing tiers for combo discounts
export const ebookPricingTiers = [
  { quantity: 1, price: 19.99, label: "1 eBook", savings: 0 },
  { quantity: 3, price: 49.99, label: "3 eBooks", savings: 9.98 },
  { quantity: 7, price: 89.99, label: "7 eBooks", savings: 49.94 }
]

export function calculateEbookPrice(quantity: number): { total: number; tier: typeof ebookPricingTiers[0] | null; appliedQuantity: number } {
  if (quantity === 0) return { total: 0, tier: null, appliedQuantity: 0 }
  
  // Find the best tier for the quantity
  let remaining = quantity
  let total = 0
  
  // Sort tiers by quantity descending to apply best discounts first
  const sortedTiers = [...ebookPricingTiers].sort((a, b) => b.quantity - a.quantity)
  
  while (remaining > 0) {
    // Find the best tier that fits
    const applicableTier = sortedTiers.find(t => t.quantity <= remaining)
    
    if (applicableTier) {
      const timesToApply = Math.floor(remaining / applicableTier.quantity)
      total += applicableTier.price * timesToApply
      remaining -= applicableTier.quantity * timesToApply
    } else {
      // If no tier fits (shouldn't happen with quantity 1 tier), charge individual price
      total += remaining * 19.99
      remaining = 0
    }
  }
  
  // Return the primary tier being used for display
  const primaryTier = sortedTiers.find(t => t.quantity <= quantity) || ebookPricingTiers[0]
  
  return { total, tier: primaryTier, appliedQuantity: quantity }
}

export function getEbookById(id: string): Ebook | undefined {
  return ebooks.find(ebook => ebook.id === id)
}
