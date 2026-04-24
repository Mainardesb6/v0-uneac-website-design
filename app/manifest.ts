import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CURSOS UNEAC - Cursos Online de Educacao, Saude e Letras",
    short_name: "CURSOS UNEAC",
    description: "Transforme sua carreira com cursos de especializacao online. Certificados reconhecidos pelo MEC.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0284c7",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/uneac-logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
    ],
    categories: ["education", "business"],
    lang: "pt-BR",
    orientation: "portrait-primary",
  }
}
