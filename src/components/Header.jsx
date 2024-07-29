import { useState, useEffect } from "react";
import "./estilos-navbar.scss";

export function Header() {
  const [isDropdownOpenActualidad, setIsDropdownOpenActualidad] =
    useState(false);
  const [isDropdownOpenCritica, setIsDropdownOpenCritica] = useState(false);
  const [isDropdownOpenLogout, setIsDropdownOpenLogout] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Funciones para mostrar menus desplegables
  const handleMouseEnterActualidad = () => {
    setIsDropdownOpenActualidad(true);
  };

  const handleMouseEnterCriticas = () => {
    setIsDropdownOpenCritica(true);
  };

  const handleMouseEnterLogout = () => {
    setIsDropdownOpenLogout(true);
  };

  const handleMouseLeaveActualidad = () => {
    setIsDropdownOpenActualidad(false);
  };

  const handleMouseLeaveCriticas = () => {
    setIsDropdownOpenCritica(false);
  };

  const handleMouseLeaveLogout = () => {
    setIsDropdownOpenLogout(false);
  };

  //Funcion para cerrar sesion y eliminar datos del localStorage
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUsername(user.name);
    }
  }, []);

  return (
    <div className="header">
      <div className="header__logo">
        <strong>LOGO</strong>
      </div>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              <span>Inicio</span>
            </a>
          </li>
          {username && (
            <li className="navbar__item">
              <a href="/tutoriales" className="navbar__link">
                <span>Tutoriales</span>
              </a>
            </li>
          )}
          {username && (
            <li className="navbar__item">
              <a href="/entrevistas" className="navbar__link">
                <span>Entrevistas</span>
              </a>
            </li>
          )}
          {username && (
            <li
              className="navbar__item"
              onMouseEnter={handleMouseEnterActualidad}
              onMouseLeave={handleMouseLeaveActualidad}
            >
              <a href="#" className="navbar__link">
                <span>Actualidad</span>
              </a>
              {isDropdownOpenActualidad && (
                <div className="navbar__dropdown">
                  <a href="/articulos" className="navbar__dropdown-item">
                    Artículos
                  </a>
                  <a href="/noticias" className="navbar__dropdown-item">
                    Noticias
                  </a>
                </div>
              )}
            </li>
          )}

          <li className="navbar__item">
            <a href="/concursos" className="navbar__link">
              <span>Concursos</span>
            </a>
          </li>
          {username && (
            <li
              className="navbar__item"
              onMouseEnter={handleMouseEnterCriticas}
              onMouseLeave={handleMouseLeaveCriticas}
            >
              <a href="#" className="navbar__link">
                <span>Reseñas y Criticas</span>
              </a>
              {isDropdownOpenCritica && (
                <div className="navbar__dropdown">
                  <a href="/libros" className="navbar__dropdown-item">
                    Libros
                  </a>
                  <a href="/equipo" className="navbar__dropdown-item">
                    Equipo
                  </a>
                </div>
              )}
            </li>
          )}

          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <span>Galerías</span>
            </a>
          </li>
          <li
            className="navbar__item"
            onMouseEnter={handleMouseEnterLogout}
            onMouseLeave={handleMouseLeaveLogout}
          >
            {isLoggedIn ? (
              <>
                <a href="#" className="navbar__link">
                  <span>{username}</span>
                </a>
                {isDropdownOpenLogout && (
                  <div className="navbar__dropdown">
                    <a href="/editar-perfil" className="navbar__dropdown-item">
                      Editar Perfil
                    </a>
                    <a href="/suscripciones" className="navbar__dropdown-item">
                      Ver Suscripciones
                    </a>
                    <a
                      href="/"
                      className="navbar__dropdown-item"
                      onClick={handleLogout}
                    >
                      Cerrar Sesión
                    </a>
                  </div>
                )}
              </>
            ) : (
              <a href="/login" className="navbar__link">
                <span>Iniciar Sesión</span>
              </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
