import { useState } from "react";
import { Helmet } from "react-helmet";

export default function FormularioEditores() {
  const [form, setForm] = useState({
    username: '',
    galeria: '',
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData();
    formData.append('username', form.username);
    formData.append('galeria', form.galeria);

    selectedFiles.forEach(file => {
      formData.append('photos', file);
    });

    fetch('http://localhost:3000/uploadToFolder', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setSendSuccess(true);
        } else {
          setSendSuccess(false);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setSendSuccess(false);
      })
      .finally(() => {
        setIsSending(false);
        setForm({
          username: '',
          galeria: ''
        });
        setSelectedFiles([]);
      });
  };

  return (
    <>
      <Helmet>
          <title>Aprobación Por Editores | Página de Fotos</title>
      </Helmet>
      <h1 className="mt-5">Aprobación por Editores</h1>
      <hr />
      <div className="container d-flex justify-content-center align-items-center min-vh-80" style={{marginTop:"-1rem"}}>
        <div className="row">
          <div className="col-6 col-md-7">
            <div className="shadow border p-4 rounded">
              <div className="col-12">
                <div className="mb-5">
                  <br />
                  <h2 className="h3">Carga de Fotografías en Galería</h2>
                  <h3 className="fs-6 fw-normal text-secondary m-0">
                    Llene todos los datos requeridos
                  </h3>
                </div>
              </div>
              {sendSuccess !== null && (
                <div>
                  {sendSuccess ? 'Archivos subidos exitosamente!' : 'Error al subir archivos.'}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                      Nombre del Fotográfo <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      placeholder="Ingrese su nombre"
                      value={form.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="galeria" className="form-label">
                      Galería <span className="text-danger">*</span>
                    </label>
                    <select
                      name="galeria"
                      id="galeria"
                      className="form-control"
                      value={form.galeria}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="retrato/">Retratos</option>
                      <option value="paisajes/">Paisajes</option>
                      <option value="urbana/">Fotografía Urbana</option>
                      <option value="arquitectura/">Fotografía de Arquitectura</option>
                      <option value="naturaleza/">Fotografía de Naturaleza</option>
                      <option value="eventos/">Fotografía de Eventos</option>
                      <option value="moda/">Fotografía de Moda</option>
                      <option value="productos/">Fotografía de Producto</option>
                      <option value="abstracta/">Fotografía Abstracta</option>
                      <option value="urbana/">Fotografia de Calle</option>
                      <option value="blanco-negro/">Fotografía en Blanco y Negro</option>
                      <option value="hdr/">Fotografía HDR</option>
                      <option value="macro/">Fotografía Macro</option>
                      <option value="larga-exposicion/">Fotografía de Larga Exposición</option>
                      <option value="iluminacion/">Fotografía de Iluminación Natural</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="photos" className="form-label">
                      Seleccionar Fotografía
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="photos"
                      name="photos[]"
                      multiple
                      onChange={handleFileChange}
                    />
                  </div>
                  <div id="preview" className="row g-2">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="col-4 col-md-3 col-lg-2">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`preview-${index}`}
                          className="img-fluid rounded"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button 
                        type="submit" 
                        className="btn bsb-btn-xl btn-primary"
                        disabled={isSending}
                      >
                        {isSending ? 'Enviando...' : 'Enviar'}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
