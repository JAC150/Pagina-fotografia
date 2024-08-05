import { Link } from "react-router-dom"
import axios from 'axios';

export default function ListaArticulosCard({el, favorito}){
  let{id, nombre, descripcion,autor} = el;

  const handleFollow = async (id) => {
    await axios.delete(`http://localhost:4500/favoritos/${id}`);
    window.location.reload()
  };

    return(
        <>
          <div className="article">
            <h2>{nombre}</h2>
            <p className="description">{descripcion}</p>
            <p className="author">Autor: {autor}</p>
            <Link to={`/articulos/${id}`}>Leer más +</Link>
            <br />
            {favorito && favorito == true ?
              <button className="mt-2 btn-danger" onClick={() => handleFollow(id)}>
                <i className="fas fa-trash"></i>
              &nbsp; Quitar de Favoritos</button>
              :''
            }
          </div>
        </>
    )
}