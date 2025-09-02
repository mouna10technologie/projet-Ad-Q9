import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Euro, Building } from "lucide-react"

export default function JobsPage() {
  const jobs = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp AI",
      location: "Paris, France",
      type: "CDI",
      salary: "70k - 90k €",
      posted: "Il y a 2 jours",
      skills: ["Python", "TensorFlow", "AWS", "Docker"],
      description: "Rejoignez notre équipe pour développer des solutions d'IA révolutionnaires.",
      logo: "/abstract-tech-logo.png",
    },
    {
      title: "Machine Learning Engineer",
      company: "DataFlow Solutions",
      location: "Lyon, France",
      type: "CDI",
      salary: "60k - 80k €",
      posted: "Il y a 1 semaine",
      skills: ["Python", "Scikit-learn", "MLOps", "Kubernetes"],
      description: "Développez des modèles ML pour analyser des téraoctets de données.",
      logo: "/data-company-logo.png",
    },
    {
      title: "Full Stack Developer IA",
      company: "Innovation Labs",
      location: "Remote",
      type: "Freelance",
      salary: "500 - 700 €/jour",
      posted: "Il y a 3 jours",
      skills: ["React", "Node.js", "OpenAI API", "MongoDB"],
      description: "Créez des interfaces utilisateur pour nos applications d'IA.",
      logo: "/innovation-lab-logo.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Trouvez votre <span className="text-primary">Emploi Idéal</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Des opportunités sélectionnées qui correspondent parfaitement à vos compétences
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Card key={index} className="card-hover bg-card border-border/20 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <CardTitle className="text-xl font-bold text-card-foreground mb-1">{job.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">{job.company}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {job.posted}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <Euro className="h-4 w-4" />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Temps plein
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Postuler maintenant
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Sauvegarder
                    </Button>
                  </div>
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
