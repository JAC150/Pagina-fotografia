import {ListaArticulos} from "../components/ListaArticulos"
import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHTTP';

export function ArticulosFavoritos() {
  const [datos, setDatos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const favorito = true;

  let api = helpHttp();
  let url = "http://localhost:4500/favoritos";

  useEffect(() => {
    api.get(url).then((res) => {
      console.log('Datos recibidos:', res);
      setDatos(res);
    });
  }, []);

const filteredDatos = datos.filter((articulo) =>
  articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <>
      <h1 className="mt-5 text-center">Artículos Favoritos</h1>
      <br />
        <hr />
        <div className="col-md-11 mb-4 text-center" >
          <input style={{marginLeft:"3rem"}}
            type="text"
            className="form-control"
            placeholder="Buscar por nombre"
             value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <div className="article-list">
          <ListaArticulos datos={filteredDatos} favorito={favorito}/>
        </div>
        <br />
    </>
  );
}
