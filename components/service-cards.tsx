import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, FileText, Bot } from "lucide-react";
import Link from "next/link";

export default function ServiceCards() {
  const services = [
    {
      icon: Code,
      title: "Développeurs",
      description:
        "Trouvez les meilleurs développeurs spécialisés en IA, machine learning et technologies émergentes pour vos projets innovants.",
      href: "/developpeurs",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Users,
      title: "Recruteurs",
      description:
        "Accédez à une plateforme complète pour identifier, évaluer et recruter les talents tech les plus prometteurs du marché.",
      href: "/recruteurs",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: FileText,
      title: "Types de Contrats",
      description:
        "Explorez toutes les modalités de collaboration : CDI, freelance, missions courtes, contrats internationaux adaptés à vos besoins.",
      href: "/contrats",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Bot,
      title: "Intelligence Artificielle",
      description:
        "Découvrez comment l'IA révolutionne le recrutement avec des outils de matching intelligent et d'évaluation automatisée.",
      href: "/ia",
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto text-pretty">
            Une plateforme complète qui connecte les talents tech avec les
            opportunités les plus innovantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`card-hover bg-card border-border/20 hover:border-primary/50 relative overflow-hidden group cursor-pointer`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-foreground transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed group-hover:text-card-foreground transition-colors">
                    {service.description}
                  </CardDescription>
                  <Link href={service.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-primary hover:text-primary-foreground hover:bg-primary group/btn"
                    >
                      En savoir plus
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
