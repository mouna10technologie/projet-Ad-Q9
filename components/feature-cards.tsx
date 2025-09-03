"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Search, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export default function FeatureCards() {
  const features = [
    {
      icon: TrendingUp,
      title: "Développez vos Compétences",
      description:
        "Accédez à des formations personnalisées, des certifications reconnues et des ressources d'apprentissage pour rester à la pointe de la technologie.",
      href: "/competences",
      color: "from-blue-500 to-cyan-500",
      delay: "0ms",
    },
    {
      icon: Search,
      title: "Trouvez votre Emploi Idéal",
      description:
        "Notre algorithme intelligent vous propose des opportunités parfaitement alignées avec vos compétences, vos aspirations et vos valeurs.",
      href: "/emplois",
      color: "from-purple-500 to-pink-500",
      delay: "100ms",
    },
    {
      icon: Users,
      title: "Collaborez avec les Meilleurs",
      description:
        "Rejoignez une communauté d'experts, participez à des projets innovants et construisez votre réseau professionnel.",
      href: "/collaboration",
      color: "from-green-500 to-emerald-500",
      delay: "200ms",
    },
    {
      icon: BookOpen,
      title: "Restez à Jour",
      description:
        "Suivez les dernières tendances technologiques, les actualités du secteur et les évolutions du marché de l'emploi tech.",
      href: "/actualites",
      color: "from-orange-500 to-red-500",
      delay: "300ms",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Votre Parcours <span className="text-primary">Professionnel</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto text-pretty">
            Des outils et ressources conçus pour accélérer votre carrière dans
            la tech
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${feature.delay} both`,
                }}
              >
                <Card className="card-hover bg-card border-border/20 hover:border-primary/50 relative overflow-hidden h-full cursor-pointer">
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110`}
                  ></div>

                  {/* Floating icon animation */}
                  <CardHeader className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-foreground transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 text-center space-y-6">
                    <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-card-foreground transition-colors duration-300">
                      {feature.description}
                    </CardDescription>

                    <Link href={feature.href}>
                      <Button
                        variant="ghost"
                        className="w-full justify-center gap-2 text-primary hover:text-primary-foreground hover:bg-primary group/btn transition-all duration-300 group-hover:translate-y-0 translate-y-2"
                      >
                        Découvrir
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardContent>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors duration-300"></div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
