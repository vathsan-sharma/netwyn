import CTA from './components/CTA'
import CustomCursor from './components/CustomCursor'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import ProgressBar from './components/ProgressBar'
import ScrollToTop from './components/ScrollToTop'
import { SpacesCarousel, Stats } from './components/Spaces'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'

export default function App() {
  return (
    <>
      <ProgressBar />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <SpacesCarousel />
        <Stats />
        <Features />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
