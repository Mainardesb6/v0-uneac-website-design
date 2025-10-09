"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useRef } from "react"
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

  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    if (typeof window === "undefined") {
      setState({ user: null, isLoading: false })
      return
    }

    const supabase = createClient()
    let mounted = true

    const loadUserProfile = async (supabaseUser: SupabaseUser) => {
      if (!mounted) return

      const { data: profile } = await supabase.from("profiles").select("*").eq("id", supabaseUser.id).single()

      if (!profile || !mounted) {
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

      setState({ user, isLoading: false })
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user && mounted) {
        loadUserProfile(session.user)
      } else if (mounted) {
        setState({ user: null, isLoading: false })
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user && mounted) {
        loadUserProfile(session.user)
      } else if (mounted) {
        setState({ user: null, isLoading: false })
      }
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setState((prev) => ({ ...prev, isLoading: true }))

    const supabase = createClient()

    console.log("[v0] ========== LOGIN ATTEMPT ==========")
    console.log("[v0] Email:", email)
    console.log("[v0] Password length:", password.length)
    console.log("[v0] Timestamp:", new Date().toISOString())

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    console.log("[v0] Supabase response received")
    console.log("[v0] Error:", error)
    console.log("[v0] Data:", data)

    if (error) {
      console.log("[v0] ========== LOGIN ERROR ==========")
      console.log("[v0] Error message:", error.message)
      console.log("[v0] Error code:", error.status)
      console.log("[v0] Error name:", error.name)
      console.log("[v0] Full error object:", JSON.stringify(error, null, 2))
      setState((prev) => ({ ...prev, isLoading: false }))

      // Check if email is not confirmed
      if (error.message.includes("Email not confirmed")) {
        console.log("[v0] Email not confirmed error detected")
        throw new Error("EMAIL_NOT_CONFIRMED")
      }

      return false
    }

    if (!data.user) {
      console.log("[v0] ========== NO USER DATA ==========")
      console.log("[v0] No user data returned from Supabase")
      setState((prev) => ({ ...prev, isLoading: false }))
      return false
    }

    console.log("[v0] ========== LOGIN SUCCESSFUL ==========")
    console.log("[v0] User ID:", data.user.id)
    console.log("[v0] User email:", data.user.email)
    console.log("[v0] Email confirmed at:", data.user.email_confirmed_at)
    console.log("[v0] Loading profile...")

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", data.user.id)
      .single()

    if (profileError) {
      console.log("[v0] ========== PROFILE ERROR ==========")
      console.log("[v0] Profile error:", profileError.message)
      console.log("[v0] Profile error code:", profileError.code)
      setState({ user: null, isLoading: false })
      return false
    }

    if (!profile) {
      console.log("[v0] ========== PROFILE NOT FOUND ==========")
      console.log("[v0] Profile not found for user:", data.user.id)
      setState({ user: null, isLoading: false })
      return false
    }

    console.log("[v0] ========== PROFILE LOADED ==========")
    console.log("[v0] Profile name:", profile.name)
    console.log("[v0] Profile CPF:", profile.cpf)
    console.log("[v0] Profile phone:", profile.phone)

    const user: User = {
      id: data.user.id,
      name: profile.name,
      email: data.user.email!,
      cpf: profile.cpf,
      phone: profile.phone,
    }

    setState({ user, isLoading: false })
    console.log("[v0] ========== LOGIN COMPLETE ==========")
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

    console.log("[v0] Registration attempt for:", email)

    if (cpf && cpf.replace(/\D/g, "").length === 11) {
      const formattedCpf = cpf.replace(/\D/g, "")
      console.log("[v0] Checking if CPF exists:", formattedCpf)

      const { data: existingCpf, error: cpfCheckError } = await supabase
        .from("profiles")
        .select("cpf")
        .eq("cpf", cpf)
        .maybeSingle()

      if (cpfCheckError) {
        console.log("[v0] Error checking CPF:", cpfCheckError.message)
      }

      if (existingCpf) {
        console.log("[v0] CPF already exists")
        setState((prev) => ({ ...prev, isLoading: false }))
        throw new Error("CPF_EXISTS")
      }
    }

    console.log("[v0] Creating user in auth...")

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
        data: {
          name,
          cpf: cpf || null,
          phone: phone || null,
        },
      },
    })

    if (error) {
      console.log("[v0] Auth signup error:", error.message)
      setState((prev) => ({ ...prev, isLoading: false }))
      if (error.message.includes("already registered") || error.message.includes("User already registered")) {
        throw new Error("EMAIL_EXISTS")
      }
      throw error
    }

    if (!data.user) {
      console.log("[v0] No user data returned from signup")
      setState((prev) => ({ ...prev, isLoading: false }))
      return false
    }

    console.log("[v0] User created successfully:", data.user.id)
    console.log("[v0] Profile will be created automatically by trigger")

    setState((prev) => ({ ...prev, isLoading: false }))
    return true
  }

  const logout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setState({ user: null, isLoading: false })
  }

  const checkEmailExists = async (email: string): Promise<boolean> => {
    return false
  }

  const resetPassword = async (email: string): Promise<boolean> => {
    const supabase = createClient()

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    })

    if (error) {
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
