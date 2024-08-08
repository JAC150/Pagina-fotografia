import { useState } from "react";
import { Helmet } from "react-helmet";

export default function RespuestaRetroalimentacion() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    asunto: '',
    retro: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData();
    formData.append('username', form.username);
    formData.append('email', form.email);
    formData.append('asunto', form.asunto);
    formData.append('retro', form.retro);

    try {
      const response = await fetch('http://localhost:3000/sendRetroalimentacion', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSendSuccess(true);
      } else {
        setSendSuccess(false);
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setSendSuccess(false);
    } finally {
      setIsSending(false);
      setForm({
        username: '',
        email: '',
        asunto: '',
        retro: ''
      });
   
    }
  };

  return (
    <>
      <Helmet>
          <title>Formulario de Retroalimentación de Fotos | Página de Fotos</title>
      </Helmet>
      <div className="container d-flex justify-content-center align-items-center min-vh-80">
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="shadow border p-4 rounded">
              <div className="col-12">
                <div className="mb-5">
                  <br />
                  <h2 className="h3">Envío de Retroalimentación por Experto</h2>
                  <h3 className="fs-6 fw-normal text-secondary m-0">
                    Llene todos los datos requeridos
                  </h3>
                </div>
              </div>
              {sendSuccess !== null && (
                <div>
                  {sendSuccess ? 'Correo enviado exitosamente!' : 'Error al enviar el correo.'}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                      Nombre de Experto<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      placeholder="Ingrese su nombre"
                      value={form.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Correo Electrónico de Fotográfo<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Ingrese su email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="asunto" className="form-label">
                      Asunto <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="asunto"
                      id="asunto"
                      value={form.asunto}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="retro" className="form-label">
                      Retroalimentación <span className="text-danger">*</span>
                    </label>
                  <textarea 
                    className="form-control"
                    name="retro"
                    id="retro"
                    value={form.retro}
                    onChange={handleChange}
                    required
                  >

                  </textarea>
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
