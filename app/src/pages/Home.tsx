import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Research from '@/sections/Research'
import Publications from '@/sections/Publications'
import Footer from '@/sections/Footer'
import { useReveal } from '@/hooks/useReveal'
import { LangProvider } from '@/i18n'

export default function Home() {
  useReveal()
  return (
    <LangProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Research />
          <Publications />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
