import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { EventFeed } from './components/EventFeed'
import { Architecture } from './components/Architecture'
import { Roadmap } from './components/Roadmap'
import { OpenSource } from './components/OpenSource'
import { Runner } from './components/Runner'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <div className="wrap" style={{ paddingTop: 26, paddingBottom: 8 }}>
        <div className="mono" style={{ textAlign: 'center', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--dim)', opacity: 0.8 }}>
          Built for MCP-native agents · orchestrator + workers · human-in-the-loop
        </div>
      </div>
      <Problem />
      <HowItWorks />
      <Features />
      <EventFeed />
      <Architecture />
      <Roadmap />
      <OpenSource />
      <Runner />
      <Cta />
      <Footer />
    </div>
  )
}
