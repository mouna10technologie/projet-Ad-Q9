import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, TrendingUp, Eye } from "lucide-react"

export default function NewsPage() {
  const articles = [
    {
      title: "L'IA Générative Transforme le Développement Logiciel",
      excerpt: "Comment les outils comme GitHub Copilot et ChatGPT révolutionnent la façon dont nous codons.",
      author: "Marie Dubois",
      date: "15 Décembre 2024",
      readTime: "5 min",
      views: 1250,
      category: "Intelligence Artificielle",
      image: "/ai-development-news.png",
    },
    {
      title: "Les Nouvelles Tendances du Recrutement Tech en 2025",
      excerpt: "Analyse des compétences les plus recherchées et des nouvelles méthodes de recrutement.",
      author: "Jean Martin",
      date: "12 Décembre 2024",
      readTime: "7 min",
      views: 890,
      category: "Recrutement",
      image: "/tech-recruitment-trends.png",
    },
    {
      title: "Salaires Tech 2025 : Le Guide Complet",
      excerpt: "Étude complète des rémunérations dans le secteur technologique français.",
      author: "Sophie Laurent",
      date: "10 Décembre 2024",
      readTime: "10 min",
      views: 2100,
      category: "Carrière",
      image: "/tech-salaries-guide.png",
    },
  ]

  const trends = [
    { topic: "Machine Learning", growth: "+25%" },
    { topic: "DevOps", growth: "+18%" },
    { topic: "Cybersécurité", growth: "+22%" },
    { topic: "Cloud Computing", growth: "+15%" },
    { topic: "Blockchain", growth: "+12%" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Restez <span className="text-primary">à Jour</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Suivez les dernières tendances et actualités du monde de la tech
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Articles Section */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Derniers Articles</h2>
              {articles.map((article, index) => (
                <Card key={index} className="card-hover bg-card border-border/20 hover:border-primary/50">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{article.category}</Badge>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {article.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {article.readTime}
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold text-card-foreground hover:text-primary transition-colors cursor-pointer">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {article.author} • {article.date}
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-primary hover:text-primary-foreground hover:bg-primary"
                          >
                            Lire la suite
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Topics */}
              <Card className="bg-card border-border/20">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-card-foreground flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Tendances
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {trends.map((trend, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-card-foreground font-medium">{trend.topic}</span>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {trend.growth}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-card-foreground">Newsletter</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Recevez les dernières actualités tech directement dans votre boîte mail
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">S'abonner</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
