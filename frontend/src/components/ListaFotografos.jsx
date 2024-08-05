import '../components/estilos-fotografos.css'

export default function ListarFotografos({ photographers, handleFollow, userId }) {
    return (
      <>
        <div className="container">
          <div className="row">
            {photographers.map(photographer => (
              <div className="col-10 col-sm-6 col-md-4 col-lg-4" key={photographer.id}>
                <div className="our-team">
                  <div className="picture">
                    <img className="img-fluid" src={photographer.foto} />
                  </div>
                  <div className="team-content">
                    <h3 className="name">{photographer.name}</h3>
                    
                  </div>
                  <ul className="social">
                    <button className="mt-3 mb-3" onClick={() => handleFollow(photographer.id)}>
                      {photographer.followers.includes(userId) ? 'Dejar de seguir' : 'Seguir +'}
                    </button>
                  </ul>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </>
    );
  }