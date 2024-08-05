import { ListaTutoriales } from "../components/ListaTutoriales";
import { useState, useEffect } from "react";
import '../components/estilos-tutoriales.css'
import { helpHttp } from "../helpers/helpHTTP";

export function Tutoriales(){
  const [datos, setDatos] = useState([]);

  let api = helpHttp();
  let url = "http://localhost:4500/tutoriales"
  useEffect(()=>{
    api.get(url).then((res)=>{
      setDatos(res)
    })
  },[])

    return(
      <>
        <h1 className="mt-5 text-center">Tutoriales</h1>
        <br />
        <div className="container">
          <p className="centered-and-justified-text">
              La comunidad está siempre activa y en constante evolución y aprendizaje. Para las personas iniciadas en el mundo de la fotografía a veces todo puede resultar tedioso o algo dificil.
          </p>
          <p className="centered-and-justified-text">
              Es por esto que hemos recopilado estos cursos para que tanto personas aficionadas como profesionales puedan seguir aprendiendo del bello mundo de la fotografía.
          </p>
        </div>

        <hr />
        <ListaTutoriales datos={datos} />
      </>
    )
  }