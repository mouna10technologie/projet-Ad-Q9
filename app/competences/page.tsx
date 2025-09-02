import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Clock, Users } from "lucide-react"

export default function SkillsPage() {
  const courses = [
    {
      title: "Machine Learning Avancé",
      provider: "TechAcademy",
      duration: "8 semaines",
      level: "Avancé",
      students: 1250,
      rating: 4.8,
      progress: 0,
      image: "/machine-learning-course.png",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Deep Learning"],
    },
    {
      title: "Développement Full Stack avec IA",
      provider: "CodeMaster",
      duration: "12 semaines",
      level: "Intermédiaire",
      students: 890,
      rating: 4.7,
      progress: 35,
      image: "/fullstack-ai-course.png",
      skills: ["React", "Node.js", "OpenAI API", "MongoDB"],
    },
    {
      title: "DevOps et MLOps",
      provider: "CloudExperts",
      duration: "6 semaines",
      level: "Avancé",
      students: 650,
      rating: 4.9,
      progress: 80,
      image: "/devops-mlops-course.png",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    },
  ]

  const certifications = [
    {
      name: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      validity: "3 ans",
      difficulty: "Expert",
    },
    {
      name: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      validity: "2 ans",
      difficulty: "Avancé",
    },
    {
      name: "Microsoft Azure AI Engineer",
      issuer: "Microsoft",
      validity: "2 ans",
      difficulty: "Intermédiaire",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Développez vos <span className="text-primary">Compétences</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Formations personnalisées et certifications reconnues pour booster votre carrière tech
            </p>
          </div>

          {/* Courses Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Formations Recommandées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="card-hover bg-card border-border/20 hover:border-primary/50">
                  <CardHeader>
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-xl font-bold text-card-foreground">{course.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">{course.provider}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students} étudiants
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant={course.level === "Avancé" ? "default" : "secondary"}>{course.level}</Badge>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>

                    {course.progress > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progression</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      {course.progress > 0 ? "Continuer" : "Commencer"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Certifications Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-hover bg-card border-border/20 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-card-foreground">{cert.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Validité:</span>
                      <span className="font-medium">{cert.validity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Difficulté:</span>
                      <Badge variant={cert.difficulty === "Expert" ? "default" : "secondary"}>{cert.difficulty}</Badge>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Préparer l'examen
                    </Button>
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
