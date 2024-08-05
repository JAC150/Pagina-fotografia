export default function Actualizaciones({ updates }) {
  return (
    <>
      <div className="contest-list">
        {updates.map((update) => {
          const date = new Date(update.date);
          const day = date.getDate();
          const month = date.toLocaleString('default', { month: 'short' });

          return (
            <div className="contest-item" key={update.id}>
              <div className="date">
                <div className="day">{day}</div>
                <div className="month">{month}</div>
              </div>
              <div className="details">
                <h2>{update.tipo}</h2>
                <p>{update.content}</p>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
