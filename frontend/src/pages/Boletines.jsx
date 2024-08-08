import '../components/estilos-boletines.css';
import { Helmet } from 'react-helmet';

export default function Boletines(){
    return(
        <>
            <Helmet>
            <title>Boletines | Página de Fotos</title>
            </Helmet>
            <h1 className="mt-5 text-center">Boletines</h1>
            <br />
            <hr />
            <div className="newsletter-container">
                <header className="newsletter-header">
                    <h1>Boletín Informativo Semanal</h1>
                    <p>Semana 29/07 - 5/08</p>
                </header>

                <section className="newsletter-content">
                    <article className="newsletter-article">
                        <h2>La Fotografía en la Era Digital: Una Exposición que Explora la Revolución de la Imagen</h2>
                        <p>Este evento celebra la evolución de la fotografía en la era digital, mostrando cómo la tecnología ha transformado la forma en que capturamos y compartimos imágenes.</p>
                        <a href="#">Leer más</a>
                    </article>

                    <article className="newsletter-article">
                        <h2>El Museo Nacional de Fotografía Anuncia "La Magia de la Fotografía en Blanco y Negro": Una Celebración de los Clásicos</h2>
                        <p>Este es un resumen del segundo artículo de la semana. Puedes incluir más detalles y un enlace para leer más.</p>
                        <a href="#">Leer más</a>
                    </article>

                    <article className="newsletter-article">
                        <h2>Festival Internacional de Fotografía de Naturaleza en Río de Janeiro: Una Muestra de la Belleza Silvestre</h2>
                        <p>EUn festival que celebra la belleza de la naturaleza a través de la fotografía, mostrando cómo los fotógrafos capturan la majestuosidad de los paisajes y la vida salvaje.</p>
                        <a href="#">Leer más</a>
                    </article>
                </section>
                <br />
                <p>Fotografías de la Semana</p>
                <section className="newsletter-images">
                    
                    <img src="../images/fotos/paisajes/mountain-4741994_1280.jpg" alt="Descripción de la imagen 1" />
                    <img src="../images/fotos/retrato/man-5693573_1280.jpg" alt="Descripción de la imagen 2" />
                </section>

                <footer className="newsletter-footer">
                    <p>&copy; 2024 Página de Fotos. Todos los derechos reservados.</p>
                    <p><a href="#">Darse de baja</a> | <a href="#">Contactar</a></p>
                </footer>
            </div>
            <br />
            <div className="newsletter-container">
                <header className="newsletter-header">
                    <h1>Boletín Informativo Semanal</h1>
                    <p>Semana 22/07 - 29/07</p>
                </header>

                <section className="newsletter-content">
                    <article className="newsletter-article">
                        <h2>"Historias en Imágenes": El Museo de Fotografía Documental Ofrece un Viaje Visual a Través de Narrativas Sociales</h2>
                        <p>Una exposición que utiliza la fotografía para contar historias profundas y personales sobre diversos aspectos de la vida social, ofreciendo una ventana a diferentes realidades y experiencias.</p>
                        <a href="#">Leer más</a>
                    </article>

                    <article className="newsletter-article">
                        <h2>El Festival de Fotografía de Moda en Milán Destaca las Últimas Tendencias y Creatividad en el Diseño</h2>
                        <p>Un festival que celebra la fotografía de moda, mostrando las últimas tendencias y la creatividad en el diseño a través de imágenes impactantes y elegantes..</p>
                        <a href="#">Leer más</a>
                    </article>

                    <article className="newsletter-article">
                        <h2>"Aventuras en la Naturaleza": El Museo de Fotografía de Aventura Presenta Imágenes de Exploraciones Exóticas</h2>
                        <p>Una exposición que captura la esencia de las aventuras y exploraciones en entornos naturales, mostrando cómo los fotógrafos documentan la emoción y la belleza de sus viajes.</p>
                        <a href="#">Leer más</a>
                    </article>
                </section>
                <br />
                <p>Fotografías de la Semana</p>
                <section className="newsletter-images">
                    
                    <img src="../images/fotos/hdr/Foto-paisaje-HDR-1024x682.webp" alt="Descripción de la imagen 1" />
                    <img src="../images/fotos/productos/cerveza_guines_horizontal_1-99f7fb81.jpeg" alt="Descripción de la imagen 2" />
                </section>

                <footer className="newsletter-footer">
                    <p>&copy; 2024 Página de Fotos. Todos los derechos reservados.</p>
                    <p><a href="#">Darse de baja</a> | <a href="#">Contactar</a></p>
                </footer>
            </div>
        </>
    )
}