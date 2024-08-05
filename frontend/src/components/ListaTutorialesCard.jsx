export default function ListaTutorialesCard({el}){

  let {titulo, descripcion, nivel, categoria, imagen} = el;
    return(
        <>
             <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="card" style={{
                    boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                }}>
                <img src={imagen} className="card-img-top" alt={titulo}  />
                <div className="card-body">
                  <h5 className="card-title">{titulo}</h5>
                  <p className="card-text">{descripcion}</p>
                  <hr />
                  <p className="card-text"><small className="text-body-primary">Categoría: {categoria}</small></p>
                  <p className="card-text"><small className="text-body-secondary">Nivel {nivel}</small></p>
                </div>
              </div>
            </div>
        </>
    )
}