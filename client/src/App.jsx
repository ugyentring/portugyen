import { BrowserRouter, Routes, Route } from "react-router-dom"
//pages
import Contact from "./pages/Contact"
import About from "./pages/About"
import Services from "./pages/Services"
import Works from "./pages/Works"
import "./global.module.css"
//components
import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App