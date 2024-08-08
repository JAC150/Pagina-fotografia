import { useState, useEffect } from "react";
import "./estilos-navbar.scss";
import { useAuth0 } from "@auth0/auth0-react";

export function Header() {
  const [isDropdownOpenActualidad, setIsDropdownOpenActualidad] = useState(false);
  const [isDropdownOpenCritica, setIsDropdownOpenCritica] = useState(false);
  const [isDropdownOpenLogout, setIsDropdownOpenLogout] = useState(false);
  const [isDropdownOpenNotificaciones, setIsDropdownOpenNotificaciones] = useState(false);
  const [username, setUsername] = useState("");
  const [suscrito, setSuscrito] = useState("");
  const [boletines, setBoletines] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let userLocal
  const { user, isAuthenticated } = useAuth0();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const response = await fetch('http://localhost:4500/usuarios');
      const data = await response.json();
      setUsuarios(data);
    };

    fetchUsuarios();
  }, []);

  if(isAuthenticated){
    const usuarioConectado = {
      id: (usuarios.length).toString(),
      name: user.name,
      email: user.email,
      password: '',
      tipo: 'lector',
      suscrito: false,
      premium: false,
      boletines: false
    };

    localStorage.setItem('user', JSON.stringify(usuarioConectado));
     userLocal = JSON.parse(localStorage.getItem("user"));
  }else{
    userLocal = JSON.parse(localStorage.getItem("user"));
    console.log(userLocal)
  }

  useEffect(() => {
    if (isAuthenticated && usuarios.length > 0) {
      const userEmail = user.email;
      const userExists = usuarios.some(usuario => usuario.email === userEmail);

      if (!userExists) {
        const newUser = {
          id: (usuarios.length + 1).toString(),
          name: user.name,
          email: userEmail,
          password: '',
          tipo: 'lector',
          suscrito: false,
          premium: false,
          boletines: false
        };

        const addUser = async () => {
          await fetch('http://localhost:4500/usuarios', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
          });

          setUsuarios([...usuarios, newUser]);
        };

        addUser();
      }
    }
  }, [isAuthenticated, usuarios, user]);

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

  const handleMouseEnterNotificaciones = () => {
    setIsDropdownOpenNotificaciones(true);
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

  const handleMouseLeaveNotificaciones = () => {
    setIsDropdownOpenNotificaciones(false);
  };

  //Funcion para cerrar sesion y eliminar datos del localStorage
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    if (userLocal) {
      setIsLoggedIn(true);
      setUsername(userLocal.name);
      setSuscrito(userLocal.suscrito);
      setBoletines(userLocal.boletines);
    }
  }, []);

  // Función para calcular el tiempo transcurrido
  const tiempoTranscurrido = (minutos) => {
    if (minutos < 60) {
      return `${minutos} minutos`;
    } else if (minutos < 1440) {
      const horas = Math.floor(minutos / 60);
      return `${horas} ${horas === 1 ? "hora" : "horas"}`;
    } else {
      const dias = Math.floor(minutos / 1440);
      return `${dias} ${dias === 1 ? "día" : "días"}`;
    }
  };

  // Datos de notificaciones simulados
  const notificaciones = [
    { id: 1, texto: "Joe subió artículo", tiempo: 10 },
    { id: 2, texto: "Maria subió artículo", tiempo: 45 },
    { id: 3, texto: "Chris subió  artículo", tiempo: 120 },
    { id: 4, texto: "Luciana subió artículo", tiempo: 300 },
    { id: 5, texto: "Shelly subió artículo", tiempo: 450 },
    { id: 6, texto: "Allanis subió artículo", tiempo: 700 },
    { id: 7, texto: "Reze subió artículo", tiempo: 820 },
    { id: 8, texto: "Zev subió artículo", tiempo: 860 },
    { id: 9, texto: "Luke subió artículo", tiempo: 900 },
    { id: 10, texto: "Weigel subió artículo", tiempo: 905 }
  ];

  return (
    <div className="header">
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              <span>Inicio</span>
            </a>
          </li>
          
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
                  <a href="/tutoriales" className="navbar__dropdown-item">
                    Tutoriales
                  </a>
                  <a href="/podcast" className="navbar__dropdown-item">
                    Podcasts
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
            <a href="/galerias" className="navbar__link">
              <span>Galerías</span>
            </a>
          </li>
          {suscrito == true ? (
            <li
              className="navbar__item"
              onMouseEnter={handleMouseEnterNotificaciones}
              onMouseLeave={handleMouseLeaveNotificaciones}
            >
              <a href="#" className="navbar__link">
                <i className="fas fa-bell"></i>
                <span className="notification-count">10</span>
              </a>
              {isDropdownOpenNotificaciones && (
                <div className="navbar__dropdown">
                  {notificaciones.map(notificacion => (
                    <div key={notificacion.id} className="navbar__dropdown-item-notification">
                      <span >{notificacion.texto}</span>
                      <span className="navbar__dropdown-time">
                        {tiempoTranscurrido(notificacion.tiempo)} atrás
                      </span>
                    </div>
                  ))}
                  <a href="/notificaciones" className="navbar__dropdown-item">
                    Ver todas
                  </a>
                </div>
              )}
            </li>
           
          )  :''} 
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
                    <a href="/perfil" className="navbar__dropdown-item">
                      Editar Perfil
                    </a>
                    <a href="/fotografos-favoritos" className="navbar__dropdown-item">
                      Fotógrafos Favoritos
                    </a>
                    <a href="/articulos-favoritos" className="navbar__dropdown-item">
                      Artículos Favoritos
                    </a>
                    <a href="/formulario-editores" className="navbar__dropdown-item">
                      Aprobación de Fotos por Editores
                    </a>
                    <a href="/respuesta-retroalimentacion" className="navbar__dropdown-item">
                      Retroalimentación Por Experto
                    </a>
                    {boletines == true ?(
                      <a href="/boletines" className="navbar__dropdown-item">
                        Boletines Semanales
                      </a>
                    ):''}
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

