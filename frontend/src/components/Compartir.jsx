// Compartir.jsx
import React from 'react';
import '../components/estilos-articulos.css'

export default function Compartir({ url, titulo }){
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(titulo);

  return (
    <div className="compartir">
      <h5>Comparte este artículo</h5>
      <div className="btn-group">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-facebook"
        >
          <i className="fab fa-facebook-square"></i>&nbsp;
          Compartir en Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-twitter"
        >
          <i className="fab fa-twitter"></i>&nbsp;
          Compartir en Twitter
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-linkedin"
        >
          <i className="fab fa-linkedin"></i>&nbsp;
          Compartir en LinkedIn
        </a>
      </div>
    </div>
  );
}
