import { useState } from "react";

export default function FormularioFotografo() {
  const [form, setForm] = useState({
    username: '',
    correo: '',
    galeria: '',
    descripcion: '',
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
    formData.append('correo', form.correo);
    formData.append('galeria', form.galeria);
    formData.append('descripcion', form.descripcion);

    selectedFiles.forEach((file, index) => {
      formData.append('photos', file); 
    });

    fetch('http://localhost:3000/sendFotosPublicaciones', {
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
          correo: '',
          galeria: '',
          descripcion: ''
        });
        setSelectedFiles([]);
      });
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row">
          <div className="col-12 col-md-7">
            <div  className="shadow border p-4 rounded">
              <div className="col-12">
                <div className="mb-5">
                  <br />
                  <h2 className="h3">Envío de Fotos para Futuras Publicaciones</h2>
                  <h3 className="fs-6 fw-normal text-secondary m-0">
                    Llene todos los datos requeridos
                  </h3>
                </div>
              </div>
              {sendSuccess !== null && (
                <div>
                  {sendSuccess ? ' Correo Enviado Exitosamente!' : 'Error al enviar el correo.'}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                      Nombres <span className="text-danger">*</span>
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
                    <label htmlFor="correo" className="form-label">
                      Correo Electrónico <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="correo"
                      id="correo"
                      placeholder="Ingrese su correo"
                      value={form.correo}
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
                      <option value="Retratos">Retratos</option>
                      <option value="Paisajes">Paisajes</option>
                      <option value="Fotografía Urbana">Fotografía Urbana</option>
                      <option value="Fotografía de Arquitectura">Fotografía de Arquitectura</option>
                      <option value="Fotografía de Naturaleza">Fotografía de Naturaleza</option>
                      <option value="Fotografía de Eventos">Fotografía de Eventos</option>
                      <option value="Fotografía de Moda">Fotografía de Moda</option>
                      <option value="Fotografía de Producto">Fotografía de Producto</option>
                      <option value="Fotografía Abstracta">Fotografía Abstracta</option>
                      <option value="Fotografia de Calle">Fotografia de Calle</option>
                      <option value="Fotografía en Blanco y Negro">Fotografía en Blanco y Negro</option>
                      <option value="Fotografía HDR">Fotografía HDR</option>
                      <option value="Fotografía Macro">Fotografía Macro</option>
                      <option value="Fotografía de Larga Exposición">Fotografía de Larga Exposición</option>
                      <option value="Fotografía de Iluminación Natural">Fotografía de Iluminación Natural</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="descripcion" className="form-label">
                      Descripción{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="descripcion"
                      id="descripcion"
                      value={form.descripcion}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="photos" className="form-label">
                      Seleccionar Fotografías
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
