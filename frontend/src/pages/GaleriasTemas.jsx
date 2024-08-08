import { useState } from 'react';
import { Helmet } from 'react-helmet';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  padding: '4% 2%',
  boxSizing: 'border-box',
  minHeight: '110vh',
  overflow: 'auto',
  alignItems: 'flex-start',
  justifyContent: 'center', // Centra el contenido horizontalmente
};

const boxStyle = {
  flex: '1 1 calc(25% - 2%)',
  overflow: 'hidden',
  transition: 'box-shadow 0.3s, transform 0.3s',
  margin: '1%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  lineHeight: '0',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
};

const boxHoverStyle = {
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  transform: 'scale(1.05)',
};

const imgStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

const spanStyle = {
  fontSize: '3.8vh',
  display: 'block',
  textAlign: 'center',
  height: '15vh',
  lineHeight: '1.5',
};


export function GaleriasTemas() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const images = [
    { href: "/galerias/1", src: "../images/fotos/retrato/girl-6714026_1280.jpg", alt: "Retratos", text: "Retratos" },
    { href: "/galerias/2", src: "../images/fotos/paisajes/fotografia-de-paisaje.jpg", alt: "Paisajes", text: "Paisajes" },
    { href: "/galerias/3", src: "../images/fotos/urbana/3-composicion-fotografica.jpg", alt: "Fotografía Urbana", text: "Fotografía Urbana" },
    { href: "/galerias/4", src: "../images/fotos/arquitectura/arquitectura_fotografos.jpg", alt: "Fotografía de Arquitectura", text: "Fotografía de Arquitectura" },
    { href: "/galerias/5", src: "../images/fotos/naturaleza/450_1000.jpg", alt: "Fotografía de Naturaleza", text: "Fotografía de Naturaleza" },
    { href: "/galerias/6", src: "../images/fotos/eventos/8-apps-para-descubrir-eventos-cercanos-a-tu-ubicacion.webp", alt: "Fotografía de Eventos", text: "Fotografía de Eventos" },
    { href: "/galerias/7", src: "../images/fotos/moda/cuales-son-los-tipos-de-fotografia-de-moda-que-existen-1.webp", alt: "Fotografía de Moda", text: "Fotografía de Moda" },
    { href: "/galerias/8", src: "../images/fotos/productos/curso_producto_vino.jpg", alt: "Fotografía de Producto", text: "Fotografía de Producto" },
    { href: "/galerias/9", src: "../images/fotos/abstracta/03-Forest-dream-por-VinothChandar.webp", alt: "Fotografía Abstracta", text: "Fotografía Abstracta" },
    { href: "/galerias/3", src: "../images/fotos/urbana/3-composicion-fotografica.jpg", alt: "Fotografía de Calle", text: "Fotografía de Calle" }
  ];

  return (
    <>
      <Helmet>
          <title>Galerías:Temas | Página de Fotos</title>
      </Helmet>
      <nav aria-label="breadcrumb">
          <li className="breadcrumb-item mt-4 ms-auto" style={{ marginLeft: "4rem", fontSize:"20px"}}><a href="/galerias">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="fas fa-reply"></i>
          &nbsp; Regresar a página principal de Galerías</a></li>
      </nav>
      <h1 className="mt-5 text-center">Galerías: Temas</h1>
      <br />
      <hr />
      
      <div style={containerStyle}>
        {images.map((image, index) => (
          <a
            key={index}
            href={image.href}
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <div
              style={{ 
                ...boxStyle, 
                ...(hoveredIndex === index ? boxHoverStyle : {})
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={imgStyle}
              />
              <span style={spanStyle}>{image.text}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
