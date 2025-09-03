"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-purple-900/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              <span className="text-purple-400">Révolutionnez</span>
              <br />
              votre carrière tech
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Connectez-vous avec les meilleures opportunités tech grâce à notre
              plateforme alimentée par l'IA. Développeurs et recruteurs, trouvez
              votre match parfait.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/developpeurs">
                <button className="bg-purple-700 hover:bg-purple-800 text-white text-lg px-8 py-4 rounded-xl font-semibold shadow-md transition duration-300 w-full sm:w-auto">
                  Je suis développeur
                </button>
              </Link>
              <Link href="/recruteurs">
                <button className="bg-white hover:bg-gray-100 text-purple-800 text-lg px-8 py-4 rounded-xl font-semibold shadow-md transition duration-300 w-full sm:w-auto">
                  Je recrute
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">10K+</div>
                <div className="text-sm text-gray-400">Développeurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">500+</div>
                <div className="text-sm text-gray-400">Entreprises</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">95%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div
            className={`relative ${isVisible ? "animate-float" : "opacity-0"}`}
          >
            <div className="relative z-10">
              <img
                src="/modern-office-with-diverse-developers-working-on-a.png"
                alt="Développeurs travaillant avec l'IA"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-2xl"></div>
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
