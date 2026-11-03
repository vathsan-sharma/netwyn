import About from './components/About'
import Amenities from './components/Amenities'
import CTA from './components/CTA'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Intro from './components/Intro'
import MediaShowcase from './components/MediaShowcase'
import Navbar from './components/Navbar'
import ProgressBar from './components/ProgressBar'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Stats from './components/Stats'
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
        <Stats />
        <Amenities />
        <About />
        <Services />
        <MediaShowcase />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
