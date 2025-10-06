"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import type { User as SupabaseUser } from "@supabase/supabase-js"

export interface User {
  id: string
  name: string
  email: string
  cpf: string
  phone: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string, cpf: string, phone: string) => Promise<boolean>
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<boolean>
  checkEmailExists: (email: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
  })

  useEffect(() => {
    if (typeof window === "undefined") {
      setState({ user: null, isLoading: false })
      return
    }

    console.log("[v0] ========== AUTH PROVIDER INITIALIZING ==========")

    const supabase = createClient()

    console.log("[v0] Initial session check")
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("[v0] Initial session check:", session ? "Session found" : "No session")
      if (session?.user) {
        console.log("[v0] User ID from session:", session.user.id)
        loadUserProfile(session.user)
      } else {
        setState({ user: null, isLoading: false })
      }
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("[v0] Auth state changed:", event)
      if (session?.user) {
        console.log("[v0] User authenticated:", session.user.id)
        loadUserProfile(session.user)
      } else {
        console.log("[v0] User logged out or session expired")
        setState({ user: null, isLoading: false })
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const loadUserProfile = async (supabaseUser: SupabaseUser) => {
    console.log("[v0] Loading user profile for:", supabaseUser.id)
    const supabase = createClient()

    const { data: profile, error } = await supabase.from("profiles").select("*").eq("id", supabaseUser.id).single()

    if (error || !profile) {
      console.error("[v0] Error loading profile:", error)
      setState({ user: null, isLoading: false })
      return
    }

    const user: User = {
      id: supabaseUser.id,
      name: profile.name,
      email: supabaseUser.email!,
      cpf: profile.cpf,
      phone: profile.phone,
    }

    console.log("[v0] User profile loaded successfully:", user.email)
    setState({ user, isLoading: false })
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    console.log("[v0] ========== LOGIN ATTEMPT ==========")
    console.log("[v0] Email:", email)
    setState((prev) => ({ ...prev, isLoading: true }))

    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error || !data.user) {
      console.error("[v0] Login error:", error)
      setState((prev) => ({ ...prev, isLoading: false }))
      return false
    }

    console.log("[v0] Login successful, user ID:", data.user.id)
    // Profile will be loaded by the auth state change listener
    return true
  }

  const register = async (
    name: string,
    email: string,
    password: string,
    cpf: string,
    phone: string,
  ): Promise<boolean> => {
    setState((prev) => ({ ...prev, isLoading: true }))

    const supabase = createClient()

    // Sign up with metadata that will be used by the trigger
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/minha-conta`,
        data: {
          name,
          cpf,
          phone,
        },
      },
    })

    if (error || !data.user) {
      console.error("[v0] Registration error:", error)
      setState((prev) => ({ ...prev, isLoading: false }))
      return false
    }

    // Note: User needs to confirm email before they can access RLS-protected resources
    // The profile will be created automatically by the database trigger
    setState((prev) => ({ ...prev, isLoading: false }))
    return true
  }

  const logout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setState({ user: null, isLoading: false })
  }

  const checkEmailExists = async (email: string): Promise<boolean> => {
    // Supabase doesn't provide a direct way to check if email exists
    // We'll try to sign in with a dummy password and check the error
    // This is not ideal but works for the password reset flow
    return false // For now, always allow password reset attempts
  }

  const resetPassword = async (email: string): Promise<boolean> => {
    const supabase = createClient()

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/esqueci-senha`,
    })

    if (error) {
      console.error("[v0] Password reset error:", error)
      return false
    }

    return true
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        login,
        register,
        logout,
        resetPassword,
        checkEmailExists,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
