import { ListaEntrevistasPremium } from '../components/ListaEntrevistasPremium';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHTTP';
import { Helmet } from 'react-helmet';

export function EntrevistasPremium() {
  const [datos, setDatos] = useState([]);
  const [isFotografo, setFotografo] = useState(false);
  const tipo = "premium";

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.tipo == 'fotografo') {
      setFotografo(true);
    }
  }, []);

  let api = helpHttp();
  let url = "http://localhost:4500/entrevistas-premium";

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
          <ListaEntrevistasPremium datos={datos} tipo={tipo}/>
        <br />
    </>
  );
}
