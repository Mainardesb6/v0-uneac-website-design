/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Força HTTPS por 1 ano, incluindo subdomínios
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Previne XSS: restringe de onde scripts/estilos/conexões podem vir
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Next.js precisa de unsafe-inline/unsafe-eval; scripts externos do Vercel Analytics
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
              // Tailwind CSS e Radix UI geram estilos inline
              "style-src 'self' 'unsafe-inline'",
              // Imagens da própria origem, data URIs e qualquer HTTPS (cursos têm imagens externas)
              "img-src 'self' data: https:",
              // Chamadas de API ao Supabase (REST + WebSocket) e Vercel Analytics
              "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://vitals.vercel-insights.com",
              // Fontes locais (Geist font)
              "font-src 'self' data:",
              // Não permite iframes (reforça X-Frame-Options)
              "frame-ancestors 'none'",
              // Formulários só submetem para a própria origem
              "form-action 'self'",
              // Não permite plugins Flash/Silverlight
              "object-src 'none'",
              // Em caso de violação, bloqueia (não apenas reporta)
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
