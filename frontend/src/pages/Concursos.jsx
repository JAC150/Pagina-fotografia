import { useEffect, useState } from "react";
import '../components/estilos-concursos.css'
import { helpHttp } from "../helpers/helpHTTP";
import ListaConcursos from "../components/ListaConcursos";
import { Helmet } from "react-helmet";

export function Concursos(){
  const [datos, setDatos] = useState([]);

  let api = helpHttp();
  let url = "http://localhost:4500/concursos"
  useEffect(()=>{
    api.get(url).then((res)=>{
      setDatos(res)
    })
  },[])

    return(
      <>
        <Helmet>
            <title>Concursos | Página de Fotos</title>
        </Helmet>
        <h1 className="mt-5 text-center">Concursos</h1>
        <br />
        <hr />
        <div className="contest-list">
          {datos && datos.length > 0 ? datos.map(el => (
            <ListaConcursos key={el.id} el={el} />
          )) : <h2>No hay datos</h2>}
        </div>
      </>
    )
  }