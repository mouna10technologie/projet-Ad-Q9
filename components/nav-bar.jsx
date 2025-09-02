"use client"

import { useState } from "react"
import Link from "next/link"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-accent">
              TechRecruit
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/developpeurs" className="nav-link">
                Développeurs
              </Link>
              <Link href="/recruteurs" className="nav-link">
                Recruteurs
              </Link>
              <Link href="/contrats" className="nav-link">
                Contrats
              </Link>
              <Link href="/ia" className="nav-link">
                IA
              </Link>
              <Link href="/competences" className="nav-link">
                Compétences
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/connexion" className="btn-secondary">
              Connexion
            </Link>
            <Link href="/inscription" className="btn-primary">
              S'inscrire
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-accent transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/developpeurs" className="mobile-nav-link">
              Développeurs
            </Link>
            <Link href="/recruteurs" className="mobile-nav-link">
              Recruteurs
            </Link>
            <Link href="/contrats" className="mobile-nav-link">
              Contrats
            </Link>
            <Link href="/ia" className="mobile-nav-link">
              IA
            </Link>
            <Link href="/competences" className="mobile-nav-link">
              Compétences
            </Link>
            <div className="pt-4 space-y-2">
              <Link href="/connexion" className="btn-secondary w-full text-center">
                Connexion
              </Link>
              <Link href="/inscription" className="btn-primary w-full text-center">
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
