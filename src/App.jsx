import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Work from "./components/Work"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Uparrow from "./components/Uparrow"

function App() {
  

  return (
    <div className="w-full flex flex-col gap-6 overflow-hidden">
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Work></Work>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Uparrow></Uparrow>
    <Footer></Footer>
    </div>
  )
}

export default App
