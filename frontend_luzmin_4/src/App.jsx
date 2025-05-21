import Inicio from "./componentsdos/Inicio"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Nosotros from "./componentsdos/Nosotros";
import SubirAreasMineras from "./componentsdos/SubirAreasMineras";
import ProfesionalTecnico from "./componentsdos/ProfesionalTecnico";
import Inversionistas from "./componentsdos/Inversionistas";
import Footer from "./components/Footer";
import DetalleArea from "./componentsdos/DetalleArea";
import Monitoreo from "./componentsdos/Monitoreo";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros/>}/>
          <Route path="/inversionistas" element={<Inversionistas />} />
          <Route path="/profesional-tecnico" element={<ProfesionalTecnico />} />
          <Route path="/subir-areas-mineras" element={<SubirAreasMineras />} />
          <Route path="/detalle-area/:id" element={<DetalleArea />} />
          <Route path="/monitoreo" element={<Monitoreo/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
