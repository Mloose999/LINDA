import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Booking } from "@/components/booking"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Philosophy />
      <Services />
      <About />
      <Booking />
      <Newsletter />
      <Footer />
    </main>
  )
}
