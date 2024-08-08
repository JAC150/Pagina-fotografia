import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHTTP';

const styles = {
    container: {
        width: '90%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '50px',
    },
    headerTitle: {
        fontSize: '2.5em',
        marginBottom: '10px',
    },
    headerText: {
        fontSize: '1.2em',
        color: '#555',
    },
    episodeList: {
        marginTop: '30px',
    },
    episodeCard: {
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        marginBottom: '20px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    episodeTitle: {
        fontSize: '1.3em',
        marginBottom: '10px',
        color: '#333',
    },
    episodeDescription: {
        color: '#666',
        marginBottom: '15px',
    },
    episodeDetails: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.9em',
        color: '#999',
    },
};

const PodcastsDetails = () => {
    const { id } = useParams();
    const [podcast, setPodcast] = useState(null);

    let api = helpHttp();
    let url = "http://localhost:4500/podcasts";

    useEffect(() => {
        api.get(url).then((res) => {
            if (!res.err) {
                const selectedPodcast = res.find(p => p.id === id);
                setPodcast(selectedPodcast);
            } else {
                console.error("Error al obtener datos:", res);
            }
        });
    }, [id]);

    if (!podcast) return <p>No se encontró el podcast.</p>;

    return (
        <div style={styles.container}>
            <br />
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>{podcast.titulo}</h1>
                <p style={styles.headerText}>{podcast.descripcion}</p>
                <p><strong>Autor:</strong> {podcast.autor}</p>
                <p><strong>Fecha de Publicación:</strong> {podcast.fechaPublicacion}</p>
                <p><strong>Categoría:</strong> {podcast.categoria}</p>
            </header>
            <div style={styles.episodeList}>
                {podcast.episodios.map(episodio => (
                    <div style={styles.episodeCard} key={episodio.id}>
                        <h4 style={styles.episodeTitle}>Episodio {episodio.id}: {episodio.titulo}</h4>
                        <p style={styles.episodeDescription}>{episodio.descripcion}</p>
                        <div style={styles.episodeDetails}>
                            <span><strong>Fecha:</strong> {episodio.fechaPublicacion}</span>
                            <span><strong>Duración:</strong> {episodio.duracion}</span>
                        </div>
                        <audio controls>
                            <source src={episodio.urlAudio} type="audio/mpeg" />
                            Tu navegador no soporta la etiqueta de audio.
                        </audio>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PodcastsDetails;
