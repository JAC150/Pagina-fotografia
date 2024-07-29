export function ListaLibros({el}){
    let{titulo, autor, descripcion, opinion} = el;
    
    return(
        <>
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="card" style={{maxWidth: "100%"}}>
                <img src="../images/books/books-1246674_1280.jpg" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title mb-3">Libro: {titulo}</h5>
                  <p className="card-text mb-2"><small className="text-muted">Autor: {autor}</small></p>
                  <p className="card-text mb-3">{descripcion}</p>
                  <p className="card-text"> {opinion}</p>
                </div>
              </div>
            </div>
        </>
    )
}