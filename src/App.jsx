import './App.css'
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  const nombre = "Juan Robledo";
  const rol = "Programador Full Stack, Ciberseguridad, estudiante de programación";

  return (
    <>
     <Header  />
     <Hero nombre={nombre} rol={rol} />
     <About />
     <Skills />
     <Projects />
     
    </>
  )
}

export default App
