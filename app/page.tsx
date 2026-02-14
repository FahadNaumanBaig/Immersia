import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CollectionsSection } from "@/components/home/collections-section"
import { VRExperienceSection } from "@/components/home/vr-experience-section"
import { RefillSection } from "@/components/home/refill-section"
import { SustainabilitySection } from "@/components/home/sustainability-section"
import { HeritageSection } from "@/components/home/heritage-section"
import { NewsletterSection } from "@/components/home/newsletter-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CollectionsSection />
        <VRExperienceSection />
        <RefillSection />
        <SustainabilitySection />
        <HeritageSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
