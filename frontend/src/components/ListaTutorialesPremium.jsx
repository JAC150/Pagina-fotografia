import { useState } from "react";
import SelectTutoriales from "./SelectTutoriales";

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  margin: '1rem 0'
};

const formLabelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  fontWeight: 'bold'
};

const formControlStyle = {
  width: '100%',
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  lineHeight: '1.5',
  color: '#495057',
  backgroundColor: '#fff',
  backgroundClip: 'padding-box',
  border: '1px solid #ced4da',
  borderRadius: '0.25rem',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
};

const formSelectStyle = {
  display: 'block',
  width: '100%',
  padding: '0.375rem 1.75rem 0.375rem 0.75rem',
  fontSize: '1rem',
  lineHeight: '1.5',
  color: '#495057',
  backgroundColor: '#fff',
  backgroundImage: 'url(data:image/svg+xml;charset=utf8,%3Csvg xmlns%3D"http://www.w3.org/2000/svg" viewBox%3D"0 0 4 5"%3E%3Cpath fill%3D"none" stroke%3D"%23343a40" d%3D"M2 0L0 2h4zm0 5L0 3h4z"/%3E%3C/svg%3E)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.75rem center',
  backgroundSize: '8px 10px',
  border: '1px solid #ced4da',
  borderRadius: '0.25rem',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
};

const btnPrimaryStyle = {
  color: '#fff',
  backgroundColor: '#007bff',
  borderColor: '#007bff',
  display: 'inline-block',
  fontWeight: 400,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  userSelect: 'none',
  border: '1px solid transparent',
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  lineHeight: 1.5,
  borderRadius: '0.25rem',
  transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
};

const cardsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  justifyContent: 'center'
};

const cardsItemStyle = {
  display: 'flex',
  padding: '1rem',
  width: 'calc(50% - 2rem)' // Asegura que dos cards quepan en una fila con espacio entre ellas
};

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '0.25rem',
  boxShadow: '0 20px 40px -14px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
};

const cardImageStyle = {
  position: 'relative',
  maxHeight: '250px'
};

const cardImageImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const cardContentStyle = {
  position: 'relative',
  padding: '16px 12px 32px 24px',
  margin: '16px 8px 8px 0',
  maxHeight: '290px',
  overflowY: 'auto'
};

const cardContentScrollbarStyle = {
  width: '8px'
};

const cardContentScrollbarTrackStyle = {
  boxShadow: 0,
  borderRadius: 0
};

const cardContentScrollbarThumbStyle = {
  background: '#c89b3f',
  borderRadius: '15px'
};

const cardTitleStyle = {
  position: 'relative',
  margin: '0 0 24px',
  paddingBottom: '10px',
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: '700'
};

const cardTitleAfterStyle = {
  position: 'absolute',
  display: 'block',
  width: '50px',
  height: '2px',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#c89b3f',
  content: '""'
};

const hrStyle = {
  margin: '24px auto',
  width: '50px',
  borderTop: '2px solid #c89b3f'
};

const cardTextStyle = {
  margin: '0 0 24px',
  fontSize: '14px',
  lineHeight: '1.5'
};

const cardTextLastChildStyle = {
  margin: 0
};

export function ListaTutorialesPremium({ datos }) {
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroDificultad, setFiltroDificultad] = useState('');
  const [filtroNombre, setFiltroNombre] = useState('');

  const categoriasUnicasArray = datos
    .filter((item, index, self) =>
      index === self.findIndex((el) => el.categoria === item.categoria)
    )
    .map((item) => item.categoria);

  const dificultadUnicaArray = datos
    .filter((item, index, self) =>
      index === self.findIndex((el) => el.nivel === item.nivel)
    )
    .map((item) => item.nivel);

  const handleCategoriaChange = (e) => {
    setFiltroCategoria(e.target.value);
  };

  const handleDificultadChange = (e) => {
    setFiltroDificultad(e.target.value);
  };

  const limpiarFiltros = () => {
    setFiltroCategoria('');
    setFiltroDificultad('');
    setFiltroNombre('');
  };

  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const datosFiltrados = datos.filter((item) => {
    return (
      (filtroCategoria === '' || item.categoria === filtroCategoria) &&
      (filtroDificultad === '' || item.nivel === filtroDificultad) &&
      (filtroNombre === '' || normalizeString(item.titulo).includes(normalizeString(filtroNombre)))
    );
  });

  return (
    <div style={containerStyle}>
      <div style={{ flex: '1 1 45%', marginLeft: '5rem' }}>
        <div className="col-md-10 mb-5">
          <label style={formLabelStyle}>Buscar por Nombre</label>
          <input
            type="text"
            style={formControlStyle}
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
            placeholder="Ingrese el texto a buscar"
          />
        </div>
      </div>
      <div style={{ flex: '1 1 45%' }}>
        <div className="col-md-10 mb-4">
          <div className="card" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>
            <div className="card-body">
              <h5 className="card-title">Filtrar por:</h5>
              <form>
                <div className="mb-3">
                  <label style={formLabelStyle}>Categoría</label>
                  <select
                    id="category"
                    style={formSelectStyle}
                    value={filtroCategoria}
                    onChange={handleCategoriaChange}
                  >
                    <option>Elige una categoría</option>
                    {categoriasUnicasArray.length > 0 ?
                      categoriasUnicasArray.map((categoria, index) => (
                        <SelectTutoriales key={index} nombre={categoria} />
                      ))
                      : <h2>No hay datos</h2>
                    }
                  </select>
                </div>
                <div className="mb-3">
                  <label style={formLabelStyle}>Dificultad</label>
                  <select
                    id="difficulty"
                    style={formSelectStyle}
                    value={filtroDificultad}
                    onChange={handleDificultadChange}
                  >
                    <option>Elige un nivel</option>
                    {dificultadUnicaArray.length > 0 ?
                      dificultadUnicaArray.map((nivel, index) => (
                        <SelectTutoriales key={index} nombre={nivel} />
                      ))
                      : <h2>No hay datos</h2>
                    }
                  </select>
                </div>
                <button type="button" style={btnPrimaryStyle} onClick={limpiarFiltros}>Limpiar Filtros</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 mb-4">
        <div className="col-md-12">
          <h5 style={{marginLeft: '5rem' }}>Resultados: {datosFiltrados.length}</h5>
          <ul style={cardsStyle}>
            {datosFiltrados.length > 0 ? datosFiltrados.map(el => (
              <li style={cardsItemStyle} key={el.id}>
                <div style={cardStyle}>
                  <div style={cardImageStyle}>
                    <img style={cardImageImgStyle} src={el.imagen} alt="mixed vegetable salad in a mason jar." />
                  </div>
                  <div style={cardContentStyle}>
                    <h2 style={cardTitleStyle}>
                      {el.titulo}
                      <div style={cardTitleAfterStyle}></div>
                    </h2>
                    <div className="card_text">
                      <p style={cardTextStyle}>{el.descripcion}</p>
                      <hr style={hrStyle} />
                      <p style={cardTextStyle}>Categoría: {el.categoria}</p>
                      <p style={cardTextStyle}>Nivel {el.nivel}</p>
                    </div>
                  </div>
                </div>
              </li>
            )) : <h2>No hay datos</h2>}
          </ul>
        </div>
      </div>
    </div>
  );
}
