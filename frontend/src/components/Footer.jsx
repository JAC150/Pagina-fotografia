import React from "react";
import './estilos-footer.css';

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Sobre Nosotros</h4>
                            
                        </div>
                        <div className="footer-col">
                            <a href="/preguntas-frecuentes">
                                <h4>Preguntas Frecuentes</h4>
                            </a>
                           
                        </div>
                        <div className="footer-col">
                            <h4>Síguenos</h4>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center">Pagina de fotos 2024. Todos los derechos reservados</h4>
                </div>
            </footer>
        </>
    );
}
