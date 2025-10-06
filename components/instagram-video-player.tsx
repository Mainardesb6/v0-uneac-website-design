"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Maximize2, ExternalLink } from "lucide-react"

interface InstagramVideoPlayerProps {
  videoUrl: string
}

export function InstagramVideoPlayer({ videoUrl }: InstagramVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    // Process embeds after script loads
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
        setIsLoading(false)
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
    }
  }

  const handleOpenInstagram = () => {
    window.open(videoUrl, "_blank")
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative bg-gradient-to-br from-primary/5 to-background">
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={handleFullscreen}
              title="Tela cheia"
            >
              <Maximize2 className="h-4 w-4" />
              <span className="sr-only">Tela cheia</span>
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={handleOpenInstagram}
              title="Abrir no Instagram"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Abrir no Instagram</span>
            </Button>
          </div>

          <div ref={containerRef} className="flex items-center justify-center min-h-[400px] md:min-h-[600px]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
              </div>
            )}
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={videoUrl}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                padding: 0,
                width: "calc(100% - 2px)",
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Extend Window interface for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}
