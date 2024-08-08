import { useState, useEffect } from "react";
import ListaNoticias from "../components/ListaNoticias";
import { helpHttp } from "../helpers/helpHTTP";
import imagenCamara from '../images/nikon-8388022_1920.jpg';
import '../components/estilos-home.css'
import '../components/estilos-noticias.css';
import { Helmet } from "react-helmet";
import { useAuth0 } from '@auth0/auth0-react';

export function Home(){
  const {  isAuthenticated } = useAuth0();
  useEffect(() => {
    if(isAuthenticated){
      window.location.reload();
    }
  },[isAuthenticated]);

  const [datos, setDatos] = useState([]);

  let api = helpHttp();
  let url = "http://localhost:4500/noticias";

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.err) {
        setDatos(res);
      } else {
        console.error("Error al obtener datos:", res);
      }
    });
  }, []);

  const ultimasNoticias = datos.slice(0, 4);

    return(
      <>
        <Helmet>
            <title>Inicio | Página de Fotos</title>
        </Helmet>
        <div className="image-container">
          <img className="background-image" src={imagenCamara} alt=""/>
          <h1 className="overlay-text">Bienvenido a nuestro espacio, donde cada imagen es 
            una invitación a ver la belleza en lo cotidiano</h1>
        </div>
        <br />
        <h2 className="text-center h1-text">Lo más reciente</h2>
        <div className="contest-list">
        {ultimasNoticias && ultimasNoticias.length > 0 ? ultimasNoticias.map(el => (
          <ListaNoticias key={el.id} el={el} />
        )) : <h2>No hay datos</h2>}
      </div>
       
      </>
      
    )
}