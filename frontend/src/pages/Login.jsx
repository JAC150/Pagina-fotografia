import { useState, useEffect } from 'react';
import '../components/estilos-login.css'
import { Helmet } from 'react-helmet';
import { useAuth0 } from '@auth0/auth0-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const url = `http://localhost:4500/usuarios?email=${email}&password=${password}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        console.log(data)
        const user = data[0];
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = '/';
      } else {
        setError('Email o contraseña incorrectos');
      }
    } catch (err) {
      console.error('Error en la solicitud:', err);
      setError('Error en la solicitud');
    }
  };

  return (
    <>
        <Helmet>
            <title>Iniciar Sesión | Página de Fotos</title>
        </Helmet>
        <div className="containerLogin mt-1">
            <input type="checkbox" id="check" />
            <div className="login form">
                <header>Iniciar Sesión</header>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Email</label>
                    <input type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <label htmlFor="">Contraseña</label>
                    <input type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <input type="submit" className="button" value="Login" />
                    <button className="btn-primary" onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}>
                    <i className="fab fa-google"></i>&nbsp;Iniciar Sesión con Google
                    </button>
                </form>
            </div>
        </div>
    </>

  );
}
