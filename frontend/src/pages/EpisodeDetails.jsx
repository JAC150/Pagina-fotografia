import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHTTP';

const EpisodeDetails = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);

  let api = helpHttp();
  let url = "http://localhost:4500/podcasts";

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.err) {
        const foundEpisode = res
          .flatMap(podcast => podcast.episodes)
          .find(e => e.id === id);
        setEpisode(foundEpisode);
      } else {
        console.error("Error al obtener datos:", res);
      }
    });
  }, [id]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div className="episode-details">
      <h1>{episode.title}</h1>
      <p>{episode.description}</p>
      <audio controls>
        <source src={episode.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default EpisodeDetails;
