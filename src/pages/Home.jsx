import Carrusel from "../components/Carrusel";
import imagenCamara from '../images/nikon-8388022_1920.jpg';
import '../components/estilos-home.css'

export function Home(){
    return(
      <>
        <div className="image-container">
          <img className="background-image" src={imagenCamara} alt=""/>
          <h1 className="overlay-text">Bienvenido a nuestro espacio, donde cada imagen es 
            una invitación a ver la belleza en lo cotidiano</h1>
        </div>
        <br />
        <h2 className="text-center h1-text">Lo más reciente</h2>

        <div className="container my-4">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title 1</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title 2</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 10 mins ago</small></p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title 3</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 15 mins ago</small></p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </>
      
    )
}