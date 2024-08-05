import {ListaArticulos} from "../components/ListaArticulos"
import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHTTP'; // Asegúrate de que el path sea correcto

export function Articulos() {
  const [datos, setDatos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  let api = helpHttp();
  let url = "http://localhost:4500/articulos";

  useEffect(() => {
    api.get(url).then((res) => {
      console.log('Datos recibidos:', res); // Verifica qué datos estás recibiendo
      setDatos(res);
    });
  }, []);
/* 
  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }; */

// Filtra los datos según el término de búsqueda
const filteredDatos = datos.filter((articulo) =>
  articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <>
      <h1 className="mt-5 text-center">Artículos</h1>
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
          <ListaArticulos datos={filteredDatos} />
        </div>
        <br />
    </>
  );
}
