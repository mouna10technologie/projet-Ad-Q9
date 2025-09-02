import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, GitBranch, Calendar } from "lucide-react"

export default function CollaborationPage() {
  const projects = [
    {
      title: "Plateforme IA de Diagnostic Médical",
      description: "Développement d'un système d'IA pour aider les médecins dans le diagnostic précoce de maladies.",
      team: 8,
      skills: ["Python", "TensorFlow", "React", "PostgreSQL"],
      status: "En cours",
      duration: "6 mois",
      lead: "Dr. Sarah Chen",
    },
    {
      title: "Assistant IA pour E-commerce",
      description: "Création d'un chatbot intelligent pour améliorer l'expérience client sur les sites e-commerce.",
      team: 5,
      skills: ["Node.js", "OpenAI API", "Vue.js", "MongoDB"],
      status: "Recrutement",
      duration: "4 mois",
      lead: "Marcus Johnson",
    },
    {
      title: "Système de Recommandation Avancé",
      description: "Algorithme de recommandation personnalisé utilisant l'apprentissage automatique.",
      team: 6,
      skills: ["Python", "Scikit-learn", "Apache Spark", "Redis"],
      status: "Planifié",
      duration: "8 mois",
      lead: "Elena Rodriguez",
    },
  ]

  const communities = [
    {
      name: "AI Developers France",
      members: 2500,
      description: "Communauté des développeurs IA francophones",
      topics: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    },
    {
      name: "Tech Innovators",
      members: 1800,
      description: "Réseau d'innovateurs et entrepreneurs tech",
      topics: ["Startups", "Innovation", "Financement", "Networking"],
    },
    {
      name: "Open Source Contributors",
      members: 3200,
      description: "Contributeurs aux projets open source",
      topics: ["GitHub", "Contributions", "Code Review", "Mentoring"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Collaborez avec les <span className="text-primary">Meilleurs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Rejoignez des projets innovants et construisez votre réseau professionnel
            </p>
          </div>

          {/* Projects Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Projets Collaboratifs</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="card-hover bg-card border-border/20 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold text-card-foreground mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Badge
                        variant={
                          project.status === "En cours"
                            ? "default"
                            : project.status === "Recrutement"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {project.team} membres
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <GitBranch className="h-4 w-4" />
                        {project.lead}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Rejoindre le projet
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        En savoir plus
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Communities Section */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Communautés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communities.map((community, index) => (
                <Card key={index} className="card-hover bg-card border-border/20 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-card-foreground">{community.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{community.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {community.members.toLocaleString()} membres
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {community.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Rejoindre</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
