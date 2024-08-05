import { useState } from "react";
import ListaTutorialesCard from "./ListaTutorialesCard";
import SelectTutoriales from "./SelectTutoriales";

export function ListaTutoriales({ datos }) {
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
    <>
      <div className="container my-4">
        <div className="row">
          <div className="mb-5">
            <label className="form-label">Buscar por Nombre</label>
            <input
              type="text"
              className="form-control"
              value={filtroNombre}
              onChange={(e) => setFiltroNombre(e.target.value)}
              placeholder="Ingrese el texto a buscar"
            />
          </div>
          <div className="col-md-3 mb-4">
            <div className="card" style={{boxshadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"}}>
              <div className="card-body">
                <h5 className="card-title">Filtrar por:</h5>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Categoría</label>
                    <select
                      id="category"
                      className="form-select"
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
                    <label className="form-label">Dificultad</label>
                    <select
                      id="difficulty"
                      className="form-select"
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
                  <button type="button" className="btn btn-primary" onClick={limpiarFiltros}>Limpiar Filtros</button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-9 mb-4">
            <div className="row">
              <div className="col-12 mb-4">
                <h5>Resultados: {datosFiltrados.length}</h5>
              </div>
              {datosFiltrados.length > 0 ? datosFiltrados.map(el => (
                <ListaTutorialesCard key={el.id} el={el}/>
              )) : <h2>No hay datos</h2>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
