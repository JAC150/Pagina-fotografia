import ListaEquipos from "../components/ListaEquipos";
import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHTTP";  

export function Equipo(){
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState("");

  let api = helpHttp();
  let url = "http://localhost:4500/resenas"
  useEffect(()=>{
    api.get(url).then((res)=>{
      setDatos(res)
    })
  },[])  

  const datosFiltrados = filtro
  ? datos.filter((el) => el.tipo_de_equipo === filtro)
  : datos;

    return(
      <>
        <h1 className="mt-5 text-center">Reseñas de Equipo</h1>
        <br />
        <hr />
        <div className="container">
          <div className="col-12">
            <label htmlFor="">Tipo de Equipo:</label>
            <select className="form-select"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}>
              <option value="">Seleccione una opción</option>
              <option value="Cámara sin espejo">Cámara sin espejo</option>
              <option value="Lente zoom">Lente zoom</option>
              <option value="Lente prime">Lente prime</option>
              <option value="Trípode">Trípode</option>
              <option value="Flash externo">Flash externo</option>
              <option value="Cámara telémetro">Cámara telémetro</option>
              <option value="Micrófono">Micrófono</option>
              <option value="Flash de estudio">Flash de estudio</option>
              <option value="Cámara compacta">Cámara compacta</option>
              <option value="Cámara réflex digital">Cámara réflex digital</option>
            </select>
          </div>
          <br />
          <div className="row">
            {datosFiltrados && datosFiltrados.length > 0 ? datosFiltrados.map(el => (
              <ListaEquipos key={el.id} el={el} />
            )) : <h2>No hay datos</h2>}
          </div>
        </div>

      </>
    )
  }