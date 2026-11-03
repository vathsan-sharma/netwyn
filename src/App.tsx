import Amenities from './components/Amenities'
import About from './components/About'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MediaShowcase from './components/MediaShowcase'
import Navbar from './components/Navbar'
import ProgressBar from './components/ProgressBar'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <>
      <ProgressBar />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Services />
        <MediaShowcase />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
