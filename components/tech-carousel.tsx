"use client";

import { useEffect, useState } from "react";

export default function TechCarousel() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    { name: "React", logo: "/react-logo-blue.png" },
    { name: "Next.js", logo: "/next-js-logo-black.png" },
    { name: "TypeScript", logo: "/typescript-logo-blue.png" },
    { name: "Node.js", logo: "/node-js-logo-green.png" },
    { name: "Python", logo: "/python-logo-yellow-blue.png" },
    { name: "Docker", logo: "/docker-logo-blue.png" },
    { name: "AWS", logo: "/aws-logo-orange.png" },
    { name: "MongoDB", logo: "/mongodb-logo-green.png" },
    { name: "PostgreSQL", logo: "/postgresql-logo-blue.png" },
    { name: "GraphQL", logo: "/graphql-logo-pink.png" },
    { name: "Vue.js", logo: "/vue-js-logo-green.png" },
    { name: "Angular", logo: "/angular-logo-red.png" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121929] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Technologies <span className="text-primary">Maîtrisées</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto text-pretty">
            Découvrez l'écosystème technologique que nos développeurs maîtrisent
            parfaitement
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-96 flex items-center justify-center perspective-1000">
          <div
            className={`relative w-80 h-80 transform-style-preserve-3d transition-all duration-1000 ${
              isVisible ? "tech-carousel" : ""
            }`}
          >
            {technologies.map((tech, index) => {
              const angle = (360 / technologies.length) * index;
              const rotateY = `rotateY(${angle}deg)`;
              const translateZ = "translateZ(200px)";

              return (
                <div
                  key={tech.name}
                  className="absolute w-24 h-24 flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm border border-border/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-card group cursor-pointer"
                  style={{
                    transform: `${rotateY} ${translateZ}`,
                    left: "50%",
                    top: "50%",
                    marginLeft: "-48px",
                    marginTop: "-48px",
                  }}
                >
                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    <img
                      src={tech.logo || "/placeholder.svg"}
                      alt={`${tech.name} logo`}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs font-medium text-card-foreground group-hover:text-primary transition-colors duration-300 text-center">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Center glow effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>

        {/* Technology stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-white">Développeurs Experts</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-white">Technologies Maîtrisées</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">1000+</div>
            <div className="text-sm text-white">Projets Réalisés</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-white">Taux de Satisfaction</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .tech-carousel {
          animation: rotate3d 20s linear infinite;
        }
        @keyframes rotate3d {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </section>
  );
}
