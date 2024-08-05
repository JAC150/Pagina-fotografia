import { ListaEntrevistas } from '../components/ListaEntrevistas';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHTTP';
import '../components/estilos-entrevistas.css';

export function Entrevistas() {
  const [datos, setDatos] = useState([]);
  const [isFotografo, setFotografo] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.tipo == 'fotografo') {
      setFotografo(true);
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
      <h1 className="mt-5 text-center">Entrevistas</h1>
      <br />
        <hr />
        {/* {isFotografo && */}
          <button className='btn btn-success mb-5'>
            <Link style={{color:"white",fontSize:"16px"}}to={`/formulario-entrevista`}>Solicitar Entrevista</Link>
          </button>
      {/*   } */}
        <div className="news-container">
          <ListaEntrevistas datos={datos} />
        </div>
        <br />
    </>
  );
}
