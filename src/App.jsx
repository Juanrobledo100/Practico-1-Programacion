import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';


function App() {
  const nombre = "Juan Robledo";
  const rol = "Programador Full Stack, Ciberseguridad, estudiante de programación";

  return (
    <>
     <Header  />
     <Hero nombre={nombre} rol={rol} />
    </>
  )
}

export default App
