import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import FormularioConcurso from "./pages/FormularioConcurso";

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
        <Route path="/libros" element={<Libros />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/entrevistas" element={<Entrevistas />} />
        <Route path="/concursos" element={<Concursos />} />
        <Route path="/concursos/:id" element={<FormularioConcurso />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/articulos/:id" element={<ArticuloDetalle />} />
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
