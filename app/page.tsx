import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { HeroSection } from "@/components/hero-section"
import { CourseCategories } from "@/components/course-categories"
import { Testimonials } from "@/components/testimonials"
import { LocationVideo } from "@/components/location-video"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CourseCategories />
        <Testimonials />
        <LocationVideo />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
