import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SplashCursor from '@/components/SplashCursor'

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <SplashCursor />
      <Header />
      <Hero />
    </main>
  )
}
