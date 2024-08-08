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


export function GaleriasEstilos() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const images = [
    { href: "/galerias/11", src: "../images/fotos/blanco-negro/5-razones-por-las-que-debes-hacer-fotografías-en-blanco-y-negro-elimina.webp", alt: "Fotografía en Blanco y Negro", text: "Fotografía en Blanco y Negro" },
    { href: "/galerias/12", src: "../images/fotos/hdr/5.webp", alt: "Fotografía HDR", text: "Fotografía HDR" },
    { href: "/galerias/13", src: "../images/fotos/macro/1366_2000.jpg", alt: "Fotografía Macro", text: "Fotografía Macro" },
    { href: "/galerias/14", src: "../images/fotos/larga-exposicion/alexander-kaunas-kTCZuDtYgzc-unsplash.jpg", alt: "Fotografía de Larga Exposición", text: "Fotografía de Larga Exposición" },
    { href: "/galerias/15", src: "../images/fotos/iluminacion/beneficios-iluminacion-natural-personas.jpg", alt: "Fotografía de Iluminación Natural", text: "Fotografía de Iluminación Natural" },
  ];

  return (
    <>
      <Helmet>
          <title>Galerías:Estilos | Página de Fotos</title>
      </Helmet>
      <nav aria-label="breadcrumb">
          <li className="breadcrumb-item mt-4 ms-auto" style={{ marginLeft: "4rem", fontSize:"20px"}}><a href="/galerias">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="fas fa-reply"></i>
          &nbsp; Regresar a página principal de Galerías</a></li>
      </nav>
      <h1 className="mt-5 text-center">Galerías: Estilos</h1>
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