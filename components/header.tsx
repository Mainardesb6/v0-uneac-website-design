"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, User, LogOut, Mail } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import { CartSidebar } from "@/components/cart-sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { createClient } from "@/lib/supabase/client"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const { state } = useCart()
  const { user, logout } = useAuth()

  useEffect(() => {
    async function checkAdmin() {
      if (!user) {
        setIsAdmin(false)
        return
      }

      const supabase = createClient()
      const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

      setIsAdmin(profile?.role === "admin")
    }

    checkAdmin()
  }, [user])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isUserMenuOpen])

  const handleLogout = async () => {
    setIsUserMenuOpen(false)
    await logout()
    window.location.href = "/"
  }

  const getUserInitials = () => {
    if (!user?.name) return "U"
    const names = user.name.split(" ")
    if (names.length >= 2) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
    }
    return user.name[0].toUpperCase()
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/95">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center p-2 rounded-lg bg-white/90 shadow-sm">
            <Image src="/images/uneac-logo.jpg" alt="UNEAC" width={120} height={40} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="/cursos" className="text-sm font-medium hover:text-primary transition-colors">
              Cursos
            </Link>
            <Link href="/cursos-mensais" className="text-sm font-medium hover:text-primary transition-colors">
              Cursos Mensais
            </Link>
            <Link href="/lives" className="text-sm font-medium hover:text-primary transition-colors">
              Conteúdo Gratuito
            </Link>
            <Link href="/quem-somos" className="text-sm font-medium hover:text-primary transition-colors">
              Quem Somos
            </Link>
            <Link href="/contato" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{user.name.split(" ")[0]}</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-popover border rounded-md shadow-lg z-[100] animate-in fade-in-0 zoom-in-95">
                    <div className="py-1">
                      <Link
                        href="/minha-conta"
                        className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors flex items-center"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <User className="mr-2 h-4 w-4" />
                        Minha Conta
                      </Link>
                      {isAdmin && (
                        <>
                          <Link
                            href="/admin/pedidos"
                            className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors flex items-center"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Gerenciar Pedidos
                          </Link>
                          <Link
                            href="/admin/leads"
                            className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors flex items-center"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            Gerenciar Leads
                          </Link>
                        </>
                      )}
                      <div className="border-t my-1" />
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors flex items-center"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sair
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/cadastro">Cadastre-se</Link>
                </Button>
              </>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center space-x-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Carrinho</span>
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold animate-pulse">
                  {state.itemCount}
                </span>
              )}
            </Button>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/cursos">Ver Todos os Cursos</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/cursos"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </Link>
              <Link
                href="/cursos-mensais"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos Mensais
              </Link>
              <Link
                href="/lives"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Conteúdo Gratuito
              </Link>
              <Link
                href="/quem-somos"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                href="/contato"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>

              <div className="pt-4 border-t space-y-3">
                {user ? (
                  <>
                    <div className="flex items-center space-x-3 px-3 py-2 bg-accent/10 rounded-md">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {getUserInitials()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href="/minha-conta" onClick={() => setIsMenuOpen(false)}>
                        <User className="mr-2 h-4 w-4" />
                        Minha Conta
                      </Link>
                    </Button>
                    {isAdmin && (
                      <>
                        <Button variant="outline" asChild className="w-full bg-transparent">
                          <Link href="/admin/pedidos" onClick={() => setIsMenuOpen(false)}>
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Gerenciar Pedidos
                          </Link>
                        </Button>
                        <Button variant="outline" asChild className="w-full bg-transparent">
                          <Link href="/admin/leads" onClick={() => setIsMenuOpen(false)}>
                            <Mail className="mr-2 h-4 w-4" />
                            Gerenciar Leads
                          </Link>
                        </Button>
                      </>
                    )}
                    <Button
                      variant="outline"
                      onClick={() => {
                        handleLogout()
                        setIsMenuOpen(false)
                      }}
                      className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sair
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href="/cadastro" onClick={() => setIsMenuOpen(false)}>
                        Cadastre-se
                      </Link>
                    </Button>
                  </>
                )}

                <Button
                  variant="outline"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsCartOpen(true)
                  }}
                  className="w-full relative flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Carrinho</span>
                  {state.itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                      {state.itemCount}
                    </span>
                  )}
                </Button>
              </div>

              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/cursos" onClick={() => setIsMenuOpen(false)}>
                  Ver Todos os Cursos
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
