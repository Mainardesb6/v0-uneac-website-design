import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  // With Fluid compute, don't put this client in a global environment
  // variable. Always create a new one on each request.
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
        },
      },
    },
  )

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: If you remove getUser() and you use server-side rendering
  // with the Supabase client, your users may be randomly logged out.
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const publicRoutes = [
    "/",
    "/login",
    "/cadastro",
    "/esqueci-senha",
    "/update-password", // Added /update-password to allow password reset without authentication
    "/cursos",
    "/cursos-mensais",
    "/contato",
    "/quem-somos",
    "/checkout",
    "/politica-privacidade",
    "/termos-uso",
    "/nossa-equipe",
  ]
  const publicRoutePrefixes = ["/curso/", "/categoria/"]
  const protectedRoutePrefixes = ["/admin/"]

  const isPublicRoute =
    publicRoutes.some((route) => request.nextUrl.pathname === route) ||
    publicRoutePrefixes.some((prefix) => request.nextUrl.pathname.startsWith(prefix))

  const isAdminRoute = protectedRoutePrefixes.some((prefix) => request.nextUrl.pathname.startsWith(prefix))

  if (isAdminRoute && user) {
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

    if (profile?.role !== "admin") {
      const url = request.nextUrl.clone()
      url.pathname = "/"
      return NextResponse.redirect(url)
    }
  }

  // Redirect to login if user is not authenticated and trying to access protected routes
  if (!user && !isPublicRoute && !request.nextUrl.pathname.startsWith("/auth")) {
    const url = request.nextUrl.clone()
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is.
  return supabaseResponse
}
