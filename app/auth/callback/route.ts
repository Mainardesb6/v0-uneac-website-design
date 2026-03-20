import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const type = requestUrl.searchParams.get("type")
  const next = requestUrl.searchParams.get("next") || "/"
  const error = requestUrl.searchParams.get("error")
  const error_code = requestUrl.searchParams.get("error_code")
  const error_description = requestUrl.searchParams.get("error_description")

  // Handle errors from Supabase (e.g., expired link)
  if (error) {
    const redirectUrl = new URL("/update-password", requestUrl.origin)
    redirectUrl.searchParams.set("error", error)
    if (error_code) redirectUrl.searchParams.set("error_code", error_code)
    if (error_description) redirectUrl.searchParams.set("error_description", error_description)
    return NextResponse.redirect(redirectUrl)
  }

  if (code) {
    const supabase = await createClient()
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)

    if (exchangeError) {
      // If there's an error exchanging the code, redirect to update-password with error
      const redirectUrl = new URL("/update-password", requestUrl.origin)
      redirectUrl.searchParams.set("error", "access_denied")
      redirectUrl.searchParams.set("error_code", "otp_expired")
      redirectUrl.searchParams.set("error_description", exchangeError.message)
      return NextResponse.redirect(redirectUrl)
    }

    // Check if this is a password recovery flow
    if (type === "recovery") {
      return NextResponse.redirect(new URL("/update-password", requestUrl.origin))
    }

    // For other flows (signup confirmation, etc.), redirect to the next page or home
    return NextResponse.redirect(new URL(next, requestUrl.origin))
  }

  // If no code, redirect to home
  return NextResponse.redirect(new URL("/", requestUrl.origin))
}
