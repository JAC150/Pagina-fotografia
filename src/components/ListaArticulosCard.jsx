import { Link } from "react-router-dom"
export default function ListaArticulosCard({el}){
  let{id, nombre, descripcion,autor} = el;

    return(
        <>
          <div className="article">
            <h2>{nombre}</h2>
            <p className="description">{descripcion}</p>
            <p className="author">Autor: {autor}</p>
            <Link to={`/articulos/${id}`}>Leer más +</Link>
          </div>
        </>
    )
}