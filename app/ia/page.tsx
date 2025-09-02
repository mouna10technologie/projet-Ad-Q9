import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Brain, Zap, Target, Cpu, Database } from "lucide-react"

export default function AIPage() {
  const aiFeatures = [
    {
      icon: Brain,
      title: "Matching Intelligent",
      description:
        "Notre IA analyse les compétences, l'expérience et les préférences pour créer des correspondances parfaites entre candidats et postes.",
    },
    {
      icon: Target,
      title: "Évaluation Automatisée",
      description:
        "Tests techniques adaptatifs qui s'ajustent au niveau du candidat pour une évaluation précise et équitable.",
    },
    {
      icon: Zap,
      title: "Recommandations Personnalisées",
      description:
        "Suggestions d'emplois et de candidats basées sur l'apprentissage automatique et l'analyse comportementale.",
    },
    {
      icon: Cpu,
      title: "Analyse Prédictive",
      description:
        "Prédiction du succès d'un candidat dans un poste spécifique basée sur des données historiques et des patterns.",
    },
    {
      icon: Database,
      title: "Traitement du Langage Naturel",
      description:
        "Analyse automatique des CV, lettres de motivation et descriptions de postes pour extraire les informations clés.",
    },
    {
      icon: Bot,
      title: "Assistant IA 24/7",
      description: "Chatbot intelligent pour répondre aux questions des candidats et recruteurs à tout moment.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Intelligence <span className="text-primary">Artificielle</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Découvrez comment l'IA révolutionne le recrutement avec des technologies de pointe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="card-hover bg-card border-border/20 hover:border-primary/50 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Prêt à expérimenter l'IA ?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Testez notre plateforme alimentée par l'intelligence artificielle et découvrez une nouvelle façon de
              recruter ou de chercher un emploi.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
              Commencer maintenant
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
