import { ListaTutoriales } from "../components/ListaTutoriales";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../components/estilos-tutoriales.css'
import { helpHttp } from "../helpers/helpHTTP";
import { Helmet } from "react-helmet";

export function Tutoriales(){
  const [datos, setDatos] = useState([]);
  const [isPremium, setPremium] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.premium == true) {
      setPremium(true);
    }
  }, []);
  
  let api = helpHttp();
  let url = "http://localhost:4500/tutoriales"
  useEffect(()=>{
    api.get(url).then((res)=>{
      setDatos(res)
    })
  },[])

    return(
      <>
        <Helmet>
            <title>Tutoriales | Página de Fotos</title>
        </Helmet>
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
        {isPremium && (
          <button className='btn btn-success mr-10' style={{marginLeft:"5rem"}}>
              <Link style={{color:"white"}}to={`/tutoriales-premium`}>Ver Tutoriales Premium</Link>
            </button>
        )}
        <ListaTutoriales datos={datos} />
      </>
    )
  }