import ListaPreguntas from '../components/ListaPreguntas';
import { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHTTP'; 

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
      <div>
        <h1 className="mt-5 text-center">Preguntas Frecuentes</h1>
        <hr />
        <br />
          <ListaPreguntas datos={datos} />
      </div> 
    </>
  );
}
