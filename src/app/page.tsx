import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { GalleryPreview } from "@/components/GalleryPreview"
import { Method } from "@/components/Method"
import { Professionals } from "@/components/Professionals"
import { About } from "@/components/About"
import { FAQ } from "@/components/FAQ"
import { ContactFinal } from "@/components/ContactFinal"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <GalleryPreview />
      <Method />
      <Professionals />
      <About />
      <FAQ />
      <ContactFinal />
    </main>
  )
}
