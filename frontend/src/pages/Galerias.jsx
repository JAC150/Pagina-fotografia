import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';


export function Galerias(){
  /* const [isFotografo, setFotografo] = useState(false); */

  /* useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.tipo == 'fotografo') {
      setFotografo(true);
    }
  }, []); */

  const cardStyle = {
    width: "25rem",
    height: "27rem",
    margin: "1rem"
  };

  const imgStyle = {
    height: "17rem",
    objectFit: "cover"
  };

  return (
    <>
      <Helmet>
          <title>Galerias | Página de Fotos</title>
      </Helmet>
      <div className="container mt-5">
        <h1 className="text-center">Galerías</h1>
        <br />
        <hr />
        <div className="d-flex justify-content-center flex-wrap">
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card" style={cardStyle}>
              <img
                src="../images/fotos/retrato/woman-3584435_1280.jpg"
                className="card-img-top"
                alt="..."
                style={imgStyle}
              />
              <div className="card-body">
                <h4 style={{color:"black"}}>Temas</h4>
                <br />
                <Link to="/galerias/temas">Ver Galerias +</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card" style={cardStyle}>
              <img
                src="../images/fotos/larga-exposicion/agua-larga-exposicion.webp"
                className="card-img-top"
                alt="..."
                style={imgStyle}
              />
              <div className="card-body">
                <h4 style={{color:"black"}}>Estilos</h4>
                <br />
                <Link to="/galerias/estilos">Ver Galerias +</Link>
              </div>
            </div>
          </div>
        </div>

        <button className='btn btn-success mb-5'>
          <Link style={{color:"white",fontSize:"16px"}}to={`/formulario-fotografias`}>Enviar Fotos a Editores</Link>
        </button>
        <button className='btn btn-success mb-5'>
          <Link style={{color:"white",fontSize:"16px"}}to={`/formulario-retroalimentacion`}>Solicitar Retroalimentación de Fotografías</Link>
        </button>
      </div>
    </>
  );
}
