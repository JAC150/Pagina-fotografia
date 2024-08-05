import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Compartir from "../components/Compartir";
import { helpHttp } from "../helpers/helpHTTP";

const styles = {
  container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      
      fontFamily: 'Arial, sans-serif'
  },
  title: {
      fontSize: '2em',
      marginBottom: '30px'
  },
  author: {
      fontSize: '1.2em',
      color: '#555',
      marginBottom: '20px'
  },
  description: {
      fontSize: '1.1em',
      color: '#666',
      marginBottom: '30px'
  },
  section: {
      marginBottom: '20px'
  },
  sectionHeading: {
      fontSize: '1.5em',
      color: '#333',
      marginBottom: '10px'
  },
  sectionContent: {
      fontSize: '1em',
      color: '#444'
  }
};

export function EntrevistaDetalle() {
  const [datos, setDatos] = useState({ entrevista: [] });
  const {id} = useParams();

console.log(id)
  let api = helpHttp();
  let url = `http://localhost:4500/entrevistas/${id}`
  useEffect(()=>{
    api.get(url).then((res)=>{
      setDatos(res)
    })
  },[])

  console.log(datos)

  return (
    <>
        <nav aria-label="breadcrumb ">
            <li className="breadcrumb-item mt-4 ms-auto" style={{ marginLeft: "4rem", fontSize:"20px"}}><a href="/entrevistas">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fas fa-reply"></i>
            &nbsp; Regresar a Entrevistas</a></li>
        </nav>
        <div style={styles.container}>
            <h1 style={styles.title}>{datos.tema}</h1>
            <img src={datos.foto} alt='' style={{ 
                width: '700px',  
                height: '450px',  
                objectFit: 'cover' 
            }} />
            <br />
            <h5 style={{marginBottom:"1rem"}}>{datos.fotografo}</h5>
            <br />
            {datos.entrevista.map((section, index) => (
                <div style={styles.section} key={index} className="mt-6">
                    <p style={styles.sectionContent}><b>Editorial:</b> {section.pregunta}</p>
                    <p style={styles.sectionContent}><b>{datos.fotografo}:</b> {section.respuesta}</p>
                </div>
            ))}
            <hr />

            <Compartir url={id} titulo={id}/>
            <br />
            
        </div>
    </>
  );
}
