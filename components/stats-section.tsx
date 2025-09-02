export default function StatsSection() {
  const stats = [
    {
      number: "10K+",
      title: "Développeurs",
      subtitle: "Talents vérifiés",
    },
    {
      number: "500+",
      title: "Entreprises",
      subtitle: "Partenaires de confiance",
    },
    {
      number: "95%",
      title: "Satisfaction",
      subtitle: "Taux de réussite",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with glass effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass rounded-3xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-6xl md:text-7xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{stat.title}</h3>
                <p className="text-muted-foreground text-lg">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
