import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MapPin, Briefcase } from "lucide-react"

export default function RecruitersPage() {
  const companies = [
    {
      name: "TechCorp AI",
      industry: "Intelligence Artificielle",
      location: "Paris, France",
      employees: "50-200",
      openPositions: 8,
      logo: "/abstract-tech-logo.png",
      description: "Leader européen en solutions d'IA pour l'entreprise",
    },
    {
      name: "DataFlow Solutions",
      industry: "Big Data",
      location: "Lyon, France",
      employees: "200-500",
      openPositions: 12,
      logo: "/data-company-logo.png",
      description: "Spécialiste en analyse de données et machine learning",
    },
    {
      name: "Innovation Labs",
      industry: "R&D Technologique",
      location: "Toulouse, France",
      employees: "20-50",
      openPositions: 5,
      logo: "/innovation-lab-logo.png",
      description: "Laboratoire de recherche en technologies émergentes",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Entreprises <span className="text-primary">Partenaires</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Rejoignez les entreprises innovantes qui recrutent les meilleurs talents tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <Card key={index} className="card-hover bg-card border-border/20 hover:border-primary/50">
                <CardHeader className="text-center">
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="w-16 h-16 mx-auto mb-4 object-cover rounded-lg"
                  />
                  <CardTitle className="text-xl font-bold text-card-foreground">{company.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{company.industry}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{company.description}</p>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {company.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {company.employees} employés
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {company.openPositions} postes ouverts
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Voir les offres
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
