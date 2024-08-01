import { Link } from "react-router-dom";

export default function ListaNoticias({el}){
    let{titulo, descripcion, tema, hora_creacion} = el;

    const fechaCreacion = new Date(hora_creacion);
    const fechaActual = new Date();
    const diferenciaMs = fechaActual - fechaCreacion;
    const diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
    const diasPorMes = 30;
    const diferenciaMeses = Math.floor(diferenciaDias / diasPorMes);

    var texto;
    if (diferenciaMeses >= 1) {
        texto = `Hace ${diferenciaMeses} ${diferenciaMeses === 1 ? 'mes' : 'meses'}`;
    } else {
        texto = `Hace ${diferenciaDias} ${diferenciaDias === 1 ? 'día' : 'días'}`;
    }

    return(
        <>
            <div className="contest-item">
                <div className="date">
                    <div className="month">{tema}</div>
                </div>
                <div className="details">
                    <h2>{titulo}</h2>
                    <p>{descripcion}..</p>
                    <p className="tiempo">{texto}</p>
                    <br />
                    <Link to="#">Ver Más +</Link>
                </div>
                <div className="line"></div>
            </div>
        </>
    )
}