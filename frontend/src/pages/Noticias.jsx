import { useEffect, useState } from "react";
import '../components/estilos-noticias.css';
import { helpHttp } from "../helpers/helpHTTP";
import ListaNoticias from "../components/ListaNoticias";
import { Helmet } from "react-helmet";

export function Noticias() {
  const [datos, setDatos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const noticiasPorPagina = 10;

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

  const indiceUltimaNoticia = paginaActual * noticiasPorPagina;
  const indicePrimeraNoticia = indiceUltimaNoticia - noticiasPorPagina;
  const noticiasActuales = datos.slice(indicePrimeraNoticia, indiceUltimaNoticia);

  const totalPaginas = Math.ceil(datos.length / noticiasPorPagina);

  const handlePaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const handlePaginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  return (
    <>
      <Helmet>
          <title>Noticias | Página de Fotos</title>
      </Helmet>
      <h1 className="mt-5 text-center">Noticias</h1>
      <br />
      <hr />
      <div className="contest-list">
        {noticiasActuales && noticiasActuales.length > 0 ? noticiasActuales.map(el => (
          <ListaNoticias key={el.id} el={el} />
        )) : <h2>No hay datos</h2>}
      </div>
      <div className="pagination">
        <button onClick={handlePaginaAnterior} disabled={paginaActual === 1}>Anterior</button>
        <span className="pagination-text">Página {paginaActual} de {totalPaginas}</span>
        <button onClick={handlePaginaSiguiente} disabled={paginaActual === totalPaginas}>Siguiente</button>
      </div>
    </>
  );
}

