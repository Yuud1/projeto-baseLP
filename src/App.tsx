import { HeroSection } from "@/components/hero-section"
import { UrgencyHeader } from "@/components/urgency-header"
import { GridMotionSection } from "@/components/grid-motion-section"
import { FlavorCarousel } from "@/components/flavor-carousel"
import { BentoGrid } from "@/components/bento-grid"
import { ActivationsSection } from "@/components/activations-section"
import { VslSection } from "@/components/vsl-section"
import { BonusesSection } from "@/components/bonuses-section"
import { FaqSection } from "@/components/faq-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { Footer } from "@/components/footer"

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <UrgencyHeader />
      <HeroSection />
      <GridMotionSection />
      <FlavorCarousel />
      <ActivationsSection />
      <VslSection />
      <BonusesSection />
      <BentoGrid />
      <GuaranteeSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
