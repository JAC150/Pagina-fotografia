import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHTTP';
import { Helmet } from 'react-helmet';

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
    headerSubtitle: {
        fontSize: '1.2em',
        color: '#555',
    },
    searchBar: {
        marginBottom: '20px',
        textAlign: 'center',
        background:'white',
        color:'white'
    },
    searchInput: {
        padding: '10px',
        fontSize: '1em',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        maxWidth: '400px',
    },
    podcastList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
    },
    podcastCard: {
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        width: 'calc(33.333% - 20px)',
        minWidth: '250px',
        transition: 'transform 0.2s',
    },
    podcastCardHover: {
        transform: 'translateY(-10px)',
    },
    podcastImage: {
        width: '100%',
        height: 'auto',
    },
    content: {
        padding: '20px',
    },
    title: {
        fontSize: '1.5em',
        marginBottom: '10px',
        color: '#333',
    },
    description: {
        color: '#666',
        marginBottom: '15px',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.9em',
        color: '#999',
    },
    category: {
        background: '#007bff',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '50px',
    },
};

const PodcastsList = () => {
    const [podcasts, setPodcasts] = useState([]);
    const [search, setSearch] = useState('');

    let api = helpHttp();
    let url = "http://localhost:4500/podcasts";

    useEffect(() => {
        api.get(url).then((res) => {
            if (!res.err) {
                setPodcasts(res);
            } else {
                console.error("Error al obtener datos:", res);
            }
        });
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    };

    const filteredPodcasts = podcasts.filter(podcast =>
        podcast.categoria.toLowerCase().includes(search)
    );

    return (
        <>
            <Helmet>
                <title>Podcasts | Página de Fotos</title>
            </Helmet>
            <div style={styles.container}>
                <header style={styles.header}>
                    <h1 style={styles.headerTitle}>Podcasts</h1>
                    <hr />
                    <br />
                    <p style={styles.headerSubtitle}>Explora los mejores podcasts sobre fotografía</p>
                </header>
                <div style={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Buscar por categoría..."
                        style={styles.searchInput}
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>
                <div style={styles.podcastList}>
                    {filteredPodcasts.map(podcast => (
                        <div 
                            style={styles.podcastCard}
                            key={podcast.id}
                            className="podcast-card"
                        >
                            <div style={styles.content}>
                                <Link to={`/podcast/${podcast.id}`}>
                                    <h3 style={styles.title}>{podcast.titulo}</h3>
                                </Link>
                                <p style={styles.description}>{podcast.descripcion}</p>
                                <div style={styles.details}>
                                    <span className="author">{podcast.autor}</span>
                                    <span style={styles.category}>{podcast.categoria}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PodcastsList;
