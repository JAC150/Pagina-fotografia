import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ListaConcursos({el}){
    let{nombre, premio_maximo, tematica, fecha_limite_inscripcion, presentacion} = el;
    const fechaObj = new Date(fecha_limite_inscripcion);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dia = fechaObj.getDate();
    const mes = fechaObj.toLocaleDateString('es-ES', { month: 'short' }); 

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          setIsLoggedIn(true);
        }
      }, []);

    return(
        <>
            <div className="contest-item">
                <div className="date">
                    <div className="day">{dia}</div>
                    <div className="month">{mes.charAt(0).toUpperCase() + mes.slice(1)}</div>
                </div>
                <div className="details">
                    <h2>{nombre}</h2>
                    <p>{presentacion}</p>
                    <p><b>Temática:</b> {tematica}</p>
                    <p><b>Premio:</b> {premio_maximo}</p>
                    <br />
                    {isLoggedIn &&
                        <Link to={`/concursos/1`}>Inscribirse en el concurso +</Link>
                    }
                    
                </div>
            </div>
            <hr className="hr-concurso"/>
        </>
    )
}