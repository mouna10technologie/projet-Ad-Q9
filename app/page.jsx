import NavBar from "../components/nav-bar"
import HeroSection from "../components/hero-section"
import ServiceCards from "../components/service-cards"
import FeatureCards from "../components/feature-cards"
import StatsSection from "../components/stats-section"
import TechCarousel from "../components/tech-carousel"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavBar />
      <main>
        <HeroSection />
        <ServiceCards />
        <FeatureCards />
        <StatsSection />
        <TechCarousel />
      </main>
      <Footer />
    </div>
  )
}
