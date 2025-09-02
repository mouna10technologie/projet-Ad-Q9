"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-accent/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">Révolutionnez</span>
              <br />
              votre carrière tech
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Connectez-vous avec les meilleures opportunités tech grâce à notre plateforme alimentée par l'IA.
              Développeurs et recruteurs, trouvez votre match parfait.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/developpeurs" className="btn-primary text-lg px-8 py-4">
                Je suis développeur
              </Link>
              <Link href="/recruteurs" className="btn-secondary text-lg px-8 py-4">
                Je recrute
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">10K+</div>
                <div className="text-sm text-gray-400">Développeurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-gray-400">Entreprises</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-float" : "opacity-0"}`}>
            <div className="relative z-10">
              <img
                src="/modern-office-with-diverse-developers-working-on-a.png"
                alt="Développeurs travaillant avec l'IA"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl"></div>
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
