import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PageNotFound from "./lib/PageNotFound"
import ScrollToTop from "./components/ScrollToTop"
import Layout from "@/components/site/Layout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Resume from "@/pages/Resume"
import Skills from "@/pages/Skills"
import Portfolio from "@/pages/Portfolio"
import DigitalPortfolio from "@/pages/DigitalPortfolio"
import GraphicsPortfolio from "@/pages/GraphicsPortfolio"
import AudioPortfolio from "@/pages/AudioPortfolio"
import Contact from "@/pages/Contact"

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/digital" element={<DigitalPortfolio />} />
            <Route path="/portfolio/graphics" element={<GraphicsPortfolio />} />
            <Route path="/portfolio/audio" element={<AudioPortfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}
