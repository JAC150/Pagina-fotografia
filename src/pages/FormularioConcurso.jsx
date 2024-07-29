import { useState } from "react";
import emailjs from "emailjs-com";

export default function FormularioConcurso() {
  const [form, setForm] = useState({
    username: '',
    concurso: '',
    nombrefoto: '',
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
    formData.append('concurso', form.concurso);
    formData.append('nombrefoto', form.nombrefoto);

    selectedFiles.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    emailjs.sendForm('service_ni1y1pa', 'template_wl1zfte', e.target, 'yKnoE3w4Knfg70Ipw')
      .then((result) => {
        console.log(result.text);
        setSendSuccess(true);
      })
      .catch((error) => {
        console.log(error.text);
        setSendSuccess(false);
      })
      .finally(() => {
        setIsSending(false);
        setForm({
          username: '',
          concurso: '',
          nombrefoto: ''
        });
      });
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row">
          <div className="col-12 col-md-7">
            <div>
              <div className="col-12">
                <div className="mb-5">
                  <br />
                  <h2 className="h3">Registro de Participante</h2>
                  <h3 className="fs-6 fw-normal text-secondary m-0">
                    Llene todos los datos requeridos
                  </h3>
                </div>
              </div>
              {sendSuccess !== null && (
                <div>
                  {sendSuccess ? 'Email sent successfully!' : 'Failed to send email.'}
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
                    <label htmlFor="concurso" className="form-label">
                      Concurso <span className="text-danger">*</span>
                    </label>
                    <select
                      name="concurso"
                      id="concurso"
                      className="form-control"
                      value={form.concurso}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Concurso de Fotografía de Emociones">Concurso de Fotografía de Emociones</option>
                      <option value="Concurso de Fotografía de Retratos">Concurso de Fotografía de Retratos</option>
                      <option value="Premio de Fotografía de Moda">Premio de Fotografía de Moda</option>
                      <option value="Concurso de Fotografía Nocturna">Concurso de Fotografía Nocturna</option>
                      <option value="Concurso de Fotografía de Bodas">Concurso de Fotografía de Bodas</option>
                      <option value="Concurso de Fotografía Astronómica">Concurso de Fotografía Astronómica</option>
                      <option value="Premio de Fotografía de Naturaleza">Premio de Fotografía de Naturaleza</option>
                      <option value="Concurso de Fotografía de Macro">Concurso de Fotografía de Macro</option>
                      <option value="Premio de Fotografía en Blanco y Negro">Premio de Fotografía en Blanco y Negro</option>
                      <option value="Concurso de Fotografía Submarina">Concurso de Fotografía Submarina</option>
                      <option value="Concurso de Fotografía de Viajes">Concurso de Fotografía de Viajes</option>
                      <option value="Premio de Fotografía de Arquitectura">Premio de Fotografía de Arquitectura</option>
                      <option value="Concurso de Fotografía de Documental">Concurso de Fotografía de Documental</option>
                      <option value="Premio de Fotografía de Vida Silvestre">Premio de Fotografía de Vida Silvestre</option>
                      <option value="Concurso Internacional de Fotografía">Concurso Internacional de Fotografía</option>
                      <option value="Concurso de Fotografía de Paisajes">Concurso de Fotografía de Paisajes</option>
                      <option value="Concurso de Fotografía de Animales">Concurso de Fotografía de Animales</option>
                      <option value="Concurso de Fotografía de Comida">Concurso de Fotografía de Comida</option>
                      <option value="Concurso de Fotografía de Deportes">Concurso de Fotografía de Deportes</option>
                      <option value="Concurso de Fotografía Urbana">Concurso de Fotografía Urbana</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="nombrefoto" className="form-label">
                      Nombre artístico de la fotografía{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombrefoto"
                      id="nombrefoto"
                      value={form.nombrefoto}
                      onChange={handleChange}
                      required
                    />
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
                        {isSending ? 'Envaindo...' : 'Enviado'}
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
