"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">TechRecruit</h3>
              <p className="text-muted-foreground leading-relaxed">
                La plateforme de recrutement nouvelle génération qui connecte les talents tech avec les opportunités
                d'avenir.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-card-foreground">Services</h4>
            <nav className="space-y-3">
              <Link
                href="/developpeurs"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Pour les Développeurs
              </Link>
              <Link
                href="/recruteurs"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Pour les Recruteurs
              </Link>
              <Link
                href="/contrats"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Types de Contrats
              </Link>
              <Link
                href="/ia"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Solutions IA
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-card-foreground">Ressources</h4>
            <nav className="space-y-3">
              <Link
                href="/competences"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Développer ses Compétences
              </Link>
              <Link
                href="/emplois"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Trouver un Emploi
              </Link>
              <Link
                href="/collaboration"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Collaboration
              </Link>
              <Link
                href="/actualites"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Actualités Tech
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-card-foreground">Newsletter</h4>
            <p className="text-muted-foreground text-sm">
              Recevez les dernières opportunités et actualités tech directement dans votre boîte mail.
            </p>

            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 bg-background border-border/50 focus:border-primary"
                />
                <Button size="icon" className="bg-primary hover:bg-primary/90">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                En vous abonnant, vous acceptez notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="py-8 border-t border-border/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-card-foreground">contact@techrecruit.fr</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Téléphone</p>
                <p className="font-medium text-card-foreground">+33 1 23 45 67 89</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Adresse</p>
                <p className="font-medium text-card-foreground">Paris, France</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 TechRecruit. Tous droits réservés.</p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Conditions d'utilisation
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
