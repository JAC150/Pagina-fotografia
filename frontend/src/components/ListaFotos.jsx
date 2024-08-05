// En ListaFotos.js
export default function ListaFotos({ datos, ruta }) {
  console.log(datos);

  var rutaRetorno = `/galerias/${ruta}`

  if (!datos || datos.length === 0) {
    return <p>No hay imágenes disponibles</p>;
  }

  return (
    <>
      <nav aria-label="breadcrumb">
          <li className="breadcrumb-item mt-4 ms-auto" style={{ marginLeft: "4rem", fontSize:"30px"}}><a href={rutaRetorno}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="fas fa-reply"></i>
          &nbsp; Regresar a Galerías</a></li>
      </nav>

      <div className="gallery">
      {datos.map((item, index) => (
        <div key={index} className="gallery__column">
          <a href={item} target="_blank" rel="noopener noreferrer" className="gallery__link">
            <figure className="gallery__thumb">
              <img src={item} alt={item} className="gallery__image" />
              <figcaption className="gallery__caption">{item.caption}</figcaption>
            </figure>
          </a>
        </div>
      ))}
    </div>
      
    </>
  );
}
