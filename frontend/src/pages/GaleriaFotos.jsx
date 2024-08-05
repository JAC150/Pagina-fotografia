import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHTTP";
import ListaFotos from "../components/ListaFotos";
import '../components/estilos-listaFotos.scss';

export function GaleriaFotos() {
    const [datos, setDatos] = useState(null);
  
    const { id } = useParams();
    console.log(id);
  
    let api = helpHttp();
    let url = `http://localhost:4500/galerias/${id}`;
  
    useEffect(() => {
      api.get(url).then((res) => {
        if (res && res.imagenes) {
          setDatos(res);
        }
      });
    }, [id]);

    const ruta = id > 10 ? 'estilos' : 'temas ';
  
    console.log(datos);
  
    return (
      <>
          {datos && datos.imagenes ? <ListaFotos datos={datos.imagenes} ruta={ruta}/> : <p>No hay datos disponibles</p>}
      </>
    );
  }
  
