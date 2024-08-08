import { ListaEntrevistas } from '../components/ListaEntrevistas';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHTTP';
import '../components/estilos-entrevistas.css';
import { Helmet } from 'react-helmet';

export function Entrevistas() {
  const [datos, setDatos] = useState([]);
  const [isPremium, setPremium] = useState(false);
  const tipo = "normal"

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.premium == true) {
      setPremium(true);
    }
  }, []);

  let api = helpHttp();
  let url = "http://localhost:4500/entrevistas";

  useEffect(() => {
    api.get(url).then((res) => {
      setDatos(res);
    });
  }, []);


  return (
    <>
      <Helmet>
          <title>Entrevistas | Página de Fotos</title>
      </Helmet>
      <h1 className="mt-5 text-center">Entrevistas</h1>
      <br />
        <hr />
        {/* {isFotografo && */}
          <button className='btn btn-success mb-5'>
            <Link style={{color:"white",fontSize:"16px"}}to={`/formulario-entrevista`}>Solicitar Entrevista</Link>
          </button> &nbsp;
        {isPremium && (
          <button className='btn btn-primary mb-5 mr-3'>
              <Link style={{color:"white",fontSize:"16px"}}to={`/entrevistas-premium`}>Ver Sección Premium</Link>
            </button>
        )}
        <div className="news-container">
          <ListaEntrevistas datos={datos} tipo={tipo}/>
        </div>
        <br />
    </>
  );
}
