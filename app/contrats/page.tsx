import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Clock, Euro, Globe } from "lucide-react"

export default function ContractsPage() {
  const contractTypes = [
    {
      icon: FileText,
      title: "CDI - Contrat à Durée Indéterminée",
      duration: "Permanent",
      salary: "45k - 80k €/an",
      benefits: ["Sécurité de l'emploi", "Avantages sociaux", "Formation continue", "Évolution de carrière"],
      description: "Le contrat idéal pour une carrière stable avec des perspectives d'évolution à long terme.",
    },
    {
      icon: Clock,
      title: "Freelance / Consultant",
      duration: "Mission courte/longue",
      salary: "400 - 800 €/jour",
      benefits: ["Flexibilité", "Tarifs élevés", "Diversité des projets", "Autonomie"],
      description: "Parfait pour les développeurs expérimentés cherchant l'indépendance et la variété.",
    },
    {
      icon: Euro,
      title: "CDD - Contrat à Durée Déterminée",
      duration: "6 mois - 2 ans",
      salary: "40k - 70k €/an",
      benefits: ["Expérience ciblée", "Possibilité de CDI", "Projets spécifiques", "Flexibilité"],
      description: "Une opportunité d'intégrer une équipe sur un projet défini avec possibilité de pérennisation.",
    },
    {
      icon: Globe,
      title: "Remote International",
      duration: "Variable",
      salary: "50k - 100k €/an",
      benefits: ["Travail à distance", "Équipes internationales", "Horaires flexibles", "Salaires compétitifs"],
      description: "Collaborez avec des équipes mondiales depuis n'importe où dans le monde.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Types de <span className="text-primary">Contrats</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explorez toutes les modalités de collaboration adaptées à vos objectifs professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contractTypes.map((contract, index) => {
              const Icon = contract.icon
              return (
                <Card key={index} className="card-hover bg-card border-border/20 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-card-foreground mb-2">{contract.title}</CardTitle>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>⏱️ {contract.duration}</span>
                          <span>💰 {contract.salary}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {contract.description}
                    </CardDescription>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Avantages :</h4>
                      <ul className="space-y-1">
                        {contract.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Voir les offres
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
