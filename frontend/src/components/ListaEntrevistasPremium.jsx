import { Link } from "react-router-dom";

export function ListaEntrevistasPremium({ datos, tipo}) {
  
  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom:'5rem;'
  };

  const cardStyle = {
    '--blur': '16px',
    '--size': 'clamp(300px, 50vmin, 600px)',
    width: 'var(--size)',
    aspectRatio: '4 / 4',
    position: 'relative',
    borderRadius: '2rem',
    overflow: 'hidden',
    color: '#000',
    transform: 'translateZ(0)',
  };

  const cardImgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'scale(calc(1 + (var(--hover, 0) * 0.25))) rotate(calc(var(--hover, 0) * -5deg))',
    transition: 'transform 0.2s',
  };

  const cardFooterStyle = {
    padding: '0 1.5rem',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'hsl(0 0% 100% / 0.5)',
    display: 'grid',
    gridTemplateRows: 'auto auto',
    gap: '0.5ch',
    backdropFilter: 'blur(var(--blur))',
    height: '30%',
    alignContent: 'center',
  };

  const cardActionStyle = {
    position: 'absolute',
    aspectRatio: 1,
    width: 'calc(var(--size) * 0.15)',
    bottom: '30%',
    right: '1.5rem',
    transform: `translateY(50%) translateY(calc(var(--size) * 0.4)) translateY(calc(var(--hover, 0) * (var(--size) * -0.4)))`,
    background: 'hsl(0 0% 100% / 0.5)',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '0.5rem',
    transition: 'transform 0.2s',
  };

  const svgStyle = {
    aspectRatio: 1,
    width: '50%',
  };

  const span1Style = {
    fontSize: 'calc(var(--size) * 0.065)',
  };

  const span2Style = {
    fontSize: 'calc(var(--size) * 0.035)',
  };

  return (
    <>
      <div style={cardContainerStyle}>
        {datos && datos.length > 0 ? datos.map(el => (
          <a href={`/entrevistas-premium/${el.id}`} className="card" key={el.id} style={cardStyle}>
            <img src={el.foto} alt="balloon with an emoji face" className="card__img" style={cardImgStyle} />
            <span className="card__footer" style={cardFooterStyle}>
                <span style={span1Style}>{el.fotografo}</span>
                <span style={span2Style}>{el.tema}</span>
                <Link to={`/entrevistas-premium/${el.id}`}>Leer Entrevista +</Link>
            </span>
            <span className="card__action" style={cardActionStyle}>
                <svg viewBox="0 0 448 512" title="play" style={svgStyle}>
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                </svg>
            </span>
          </a>
            
          )) : <h2>No hay datos</h2>}
      </div>
    </>
  );
}
