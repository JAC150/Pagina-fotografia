import React, { useState, useEffect } from 'react';
import '../components/estilos-comentarios.css';
import { helpHttp } from '../helpers/helpHTTP';

const initialForm = {
    nombre: "",
    comentario: "",
    id: null
};

const Respuesta = ({ respuesta }) => {
    return (
        <div className="respuesta">
            <strong>{respuesta.usuario}:</strong> {respuesta.respuesta}
        </div>
    );
};

const Comentario = ({ comentario, onReply }) => {
    const [mostrarRespuestas, setMostrarRespuestas] = useState(false);
    const [mostrarFormularioRespuesta, setMostrarFormularioRespuesta] = useState(false);
    const [respuestaTexto, setRespuestaTexto] = useState('');
    const [username, setUsername] = useState(null);

    const handleToggleRespuestas = () => {
        setMostrarRespuestas(!mostrarRespuestas);
    };

    const handleToggleFormularioRespuesta = () => {
        setMostrarFormularioRespuesta(!mostrarFormularioRespuesta);
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          setUsername(user.name);
        }
      }, [comentario]);

    const handleSubmitRespuesta = (e) => {
        e.preventDefault();
        const newRespuesta = {
            usuario: username,  
            respuesta: respuestaTexto
        };
        onReply(comentario.usuario, newRespuesta);
        setRespuestaTexto('');
        setMostrarFormularioRespuesta(false);
        window.location.reload()
    };

    return (
        <div className="comentario">
            <strong>{comentario.usuario}:</strong> {comentario.comentario}
            &nbsp; &nbsp;{comentario.respuestas && comentario.respuestas.length > 0 && (
                <div>
                    <button className="btn-secondary btn-sm" onClick={handleToggleRespuestas}>
                        {mostrarRespuestas ? 'Ocultar Respuestas' : 'Mostrar Respuestas'}
                    </button>
                    {mostrarRespuestas && (
                        <div className="respuestas">
                            {comentario.respuestas.map((resp, index) => (
                                <Respuesta key={index} respuesta={resp} />
                            ))}
                        </div>
                    )}
                </div>
            )}
            <button className="btn-reply" onClick={handleToggleFormularioRespuesta}>
                {mostrarFormularioRespuesta ? 'Cancelar' : 'Responder'}
            </button>
            {mostrarFormularioRespuesta && (
                <form onSubmit={handleSubmitRespuesta} className="formulario-respuesta">
                    <label className="form-label">Tu Respuesta</label>
                    <textarea
                        className="form-control"
                        value={respuestaTexto}
                        onChange={(e) => setRespuestaTexto(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn">Enviar Respuesta</button>
                </form>
            )}
        </div>
    );
};

export default function Comentarios({ comentarios, id }) {
    const [form, setForm] = useState(initialForm);
    const [articulo, setArticulo] = useState(null);
    const [username, setUsername] = useState(null);
    const api = helpHttp();
    const url = `http://localhost:4500/articulos/${id}`;

    useEffect(() => {
        api.get(url).then((res) => {
            if (res) {
                setArticulo(res);
            }
        });
    }, [api, url]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          setUsername(user.name);
        }
      }, [form]);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!articulo) return;

        const newComentario = {
            usuario: username,
            comentario: form.comentario,
            respuestas: [],
        };

        const updatedComentarios = [...(articulo.comentarios || []), newComentario];

        api.patch(url, {
            body: { comentarios: updatedComentarios },
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            if (res) {
                setArticulo((prevArticulo) => ({
                    ...prevArticulo,
                    comentarios: updatedComentarios,
                }));
            }
        });

        handleReset();
    };

    const handleReset = () => {
        setForm(initialForm);
        window.location.reload()
    };

    const handleReply = (usuario, respuesta) => {
        const updatedComentarios = articulo.comentarios.map((comentario) => {
            if (comentario.usuario === usuario) {
                return {
                    ...comentario,
                    respuestas: comentario.respuestas ? [...comentario.respuestas, respuesta] : [respuesta]
                };
            }
            return comentario;
        });

        api.patch(url, {
            body: { comentarios: updatedComentarios },
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            if (res) {
                setArticulo((prevArticulo) => ({
                    ...prevArticulo,
                    comentarios: updatedComentarios,
                }));
            }
        });
    };

    return (
        <div className="comentarios">
            {comentarios && comentarios.length > 0 ? (
                comentarios.map((comentario, index) => (
                    <Comentario key={index} comentario={comentario} onReply={handleReply} />
                ))
            ) : (
                <p>No hay comentarios</p>
            )}
            <br />
            <div className="nuevo-comentario">
                <h5>Deja un comentario</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Comentario</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            name='comentario'
                            value={form.comentario}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar Comentario</button>
                </form>
            </div>
        </div>
    );
}

