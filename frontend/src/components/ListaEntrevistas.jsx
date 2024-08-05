import { Link } from "react-router-dom";

export function ListaEntrevistas({ datos}) {
  
  return (
    <>
      {datos && datos.length > 0 ? datos.map(el => (
          <div className="news-item" key={el.id}>
              <img src={el.foto} alt="Noticia 1" />
              <div className="news-content">
                  <span className="category">{el.fotografo}</span>
                  <h3>{el.tema}</h3>
                  <Link to={`/entrevistas/${el.id}`}>Leer Entrevista +</Link>
              </div>
          </div>
        )) : <h2>No hay datos</h2>}
     
    </>
  );
}
