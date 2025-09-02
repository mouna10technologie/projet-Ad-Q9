import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock } from "lucide-react"

export default function DevelopersPage() {
  const developers = [
    {
      name: "Sarah Chen",
      title: "Senior AI Engineer",
      location: "Paris, France",
      experience: "5 ans",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps"],
      rating: 4.9,
      projects: 12,
      image: "/professional-woman-developer.png",
    },
    {
      name: "Marcus Johnson",
      title: "Machine Learning Specialist",
      location: "Lyon, France",
      experience: "7 ans",
      skills: ["R", "Scikit-learn", "AWS", "Docker"],
      rating: 4.8,
      projects: 18,
      image: "/professional-man-developer.png",
    },
    {
      name: "Elena Rodriguez",
      title: "Full Stack AI Developer",
      location: "Marseille, France",
      experience: "4 ans",
      skills: ["JavaScript", "React", "Node.js", "OpenAI API"],
      rating: 4.7,
      projects: 9,
      image: "/professional-woman-developer-coding.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Développeurs <span className="text-primary">Experts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Découvrez notre communauté de développeurs spécialisés en intelligence artificielle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developers.map((dev, index) => (
              <Card key={index} className="card-hover bg-card border-border/20 hover:border-primary/50">
                <CardHeader className="text-center">
                  <img
                    src={dev.image || "/placeholder.svg"}
                    alt={dev.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl font-bold text-card-foreground">{dev.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{dev.title}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {dev.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {dev.experience}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{dev.rating}</span>
                    <span className="text-muted-foreground">({dev.projects} projets)</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {dev.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Voir le profil
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
