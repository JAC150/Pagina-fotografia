import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Tutoriales } from "./pages/Tutoriales";
import { Articulos } from "./pages/Articulos";
import { Concursos } from "./pages/Concursos";
import { ArticuloDetalle } from "./pages/ArticuloDetalle";
import { Libros } from "./pages/Libros";
import { Entrevistas } from "./pages/Entrevistas";
import { Equipo } from "./pages/Equipo";
import { Noticias } from "./pages/Noticias";
import { Galerias } from "./pages/Galerias";
import { GaleriasEstilos } from "./pages/GaleriasEstilos";
import { GaleriasTemas } from "./pages/GaleriasTemas";
import { GaleriaFotos } from "./pages/GaleriaFotos";
import FotografosFavoritos from "./pages/FotografosFavoritos";
import { PreguntasFrecuentes } from "./pages/PreguntasFrecuentes";
import { ArticulosFavoritos } from "./pages/ArticulosFavoritos";
import FormularioEntrevista from "./pages/FormularioEntrevista";
import FormularioFotografo from "./pages/FormularioFotografo";
import FormularioEditores from "./pages/FormularioEditores";
import FormularioRetroalimentacion from "./pages/FormularioRetroalimentacion";
import RespuestaRetroalimentacion from "./pages/RespuestaRetroalimentacion";
import { EntrevistasPremium } from "./pages/EntrevistasPremium";
import { TutorialesPremium } from "./pages/TutorialesPremium";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import FormularioConcurso from "./pages/FormularioConcurso";
import { EntrevistaDetalle } from "./pages/EntrevistaDetalle";
import Perfil from "./pages/Perfil";
import Boletines from "./pages/Boletines";
import PodcastsList from './pages/PodcastsList';
import PodcastsDetails from './pages/PodcastsDetails';
import EpisodeDetails from './pages/EpisodeDetails';

function AppContent() {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== "/login";
  
  return (
    <>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/tutoriales" element={<Tutoriales />} />
        <Route path="/tutoriales-premium" element={<TutorialesPremium />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/entrevistas" element={<Entrevistas />} />
        <Route path="/entrevistas-premium" element={<EntrevistasPremium />} />
        <Route path="/entrevistas/:id" element={<EntrevistaDetalle />} />
        <Route path="/entrevistas-premium/:id" element={<EntrevistaDetalle />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/galerias" element={<Galerias />} />
        <Route path="/fotografos-favoritos" element={<FotografosFavoritos />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/articulos-favoritos" element={<ArticulosFavoritos />} />
        <Route path="/formulario-entrevista" element={<FormularioEntrevista />} />
        <Route path="/formulario-fotografias" element={<FormularioFotografo />} />
        <Route path="/formulario-editores" element={<FormularioEditores />} />
        <Route path="/formulario-retroalimentacion" element={<FormularioRetroalimentacion />} />
        <Route path="/respuesta-retroalimentacion" element={<RespuestaRetroalimentacion />} />
        <Route path="/galerias/temas" element={<GaleriasTemas />}></Route>
        <Route path="/galerias/:id" element={<GaleriaFotos />}></Route>
        <Route path="/galerias/estilos" element={<GaleriasEstilos />}></Route>
        <Route path="/concursos" element={<Concursos />} />
        <Route path="/concursos/:id" element={<FormularioConcurso />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/boletines" element={<Boletines />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/articulos/:id" element={<ArticuloDetalle />} />
        <Route path="/podcast" element={<PodcastsList />} />
        <Route path="/podcast/:id" element={<PodcastsDetails />} />
        <Route path="/episode/:id" element={<EpisodeDetails />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;