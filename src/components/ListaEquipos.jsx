export default function ListaEquipos({el}){
    let{nombre_del_equipo, tipo_de_equipo, reseña, puntuación, imagen} = el;
    
    return(
        <>
            <div className="col-md-4 mb-3 d-flex align-items-stretch">
              <div className="card" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={imagen} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="card-title mb-3">{nombre_del_equipo}</h6>
                      <p className="card-text mb-3" style={{ fontSize: "12px" }}>Tipo: {tipo_de_equipo}</p>
                      <p className="card-text mb-3" style={{ fontSize: "12px" }}>
                        {reseña}
                      </p>
                      <p className="card-text" style={{ fontSize: "16px" }}>
                        <small className="text-body-secondary">Puntuación: {puntuación}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}