import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Process } from '@/components/sections/Process'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="relative bg-background">
      <Header />
      
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <Experience />
      <Skills />
      <Process />
      <Contact />
      
      <Footer />
    </main>
  );
}
