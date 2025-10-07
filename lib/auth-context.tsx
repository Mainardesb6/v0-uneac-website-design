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

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user && mounted) {
        loadUserProfile(session.user)
      } else if (mounted) {
        setState({ user: null, isLoading: false })
      }
    })

    // Listen for auth changes
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
  }, []) // Empty dependency array ensures this only runs once

  const login = async (email: string, password: string): Promise<boolean> => {
    setState((prev) => ({ ...prev, isLoading: true }))

    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error || !data.user) {
      setState((prev) => ({ ...prev, isLoading: false }))
      return false
    }

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

    if (cpf && cpf.replace(/\D/g, "").length === 11) {
      const { data: existingCpf } = await supabase.from("profiles").select("id").eq("cpf", cpf).single()

      if (existingCpf) {
        setState((prev) => ({ ...prev, isLoading: false }))
        throw new Error("CPF_EXISTS")
      }
    }

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
      setState((prev) => ({ ...prev, isLoading: false }))
      if (error?.message?.includes("already registered")) {
        throw new Error("EMAIL_EXISTS")
      }
      return false
    }

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
      redirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/esqueci-senha`,
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
