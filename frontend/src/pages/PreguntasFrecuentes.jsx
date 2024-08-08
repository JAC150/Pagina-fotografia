import ListaPreguntas from '../components/ListaPreguntas';
import { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHTTP'; 
import { Helmet } from 'react-helmet';

export function PreguntasFrecuentes() {
  const [datos, setDatos] = useState([]);

  let api = helpHttp();
  let url = "http://localhost:4500/faqs";

  useEffect(() => {
    api.get(url).then((res) => {
      console.log('Datos recibidos:', res); 
      setDatos(res);
    });
  }, []);
console.log(datos)

  return (
    <>
      <Helmet>
          <title>Preguntas Frecuentes | Página de Fotos</title>
      </Helmet>
      <div>
        <h1 className="mt-5 text-center">Preguntas Frecuentes</h1>
        <hr />
        <br />
          <ListaPreguntas datos={datos} />
      </div> 
    </>
  );
}
