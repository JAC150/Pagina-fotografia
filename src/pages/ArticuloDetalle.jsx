import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Comentarios from "../components/Comentarios";
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

export function ArticuloDetalle({articulo}) {
  const [datos, setDatos] = useState({ sections: [] });
  console.log(articulo)

  const {id} = useParams();

  let api = helpHttp();
  let url = `http://localhost:4500/articulos/${id}`
  useEffect(()=>{
    api.get(url).then((res)=>{
      setDatos(res)
    })
  },[articulo])

  console.log(datos)

  return (
    <>
        <nav aria-label="breadcrumb ">
            <li className="breadcrumb-item mt-4 ms-auto" style={{ marginLeft: "4rem", fontSize:"20px"}}><a href="/articulos">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fas fa-reply"></i>
            &nbsp; Regresar a Artículos</a></li>
        </nav>
        <div style={styles.container}>
            <h1 style={styles.title}>{datos.nombre}</h1>
            <h2 style={styles.author}><b>Autor:</b> {datos.autor}</h2>
            <p style={styles.description}>{datos.descripcion}</p>
            {datos.sections.map((section, index) => (
                <div style={styles.section} key={index}>
                    <h3 style={styles.sectionHeading}>{section.heading}</h3>
                    <p style={styles.sectionContent}>{section.content}</p>
                </div>
            ))}
            <hr />

            <Compartir url={id} titulo={id}/>
            <br />
            <h3>Comentarios</h3>
            <Comentarios comentarios={datos.comentarios} id={datos.id}/>
        </div>
    </>
  );
}
