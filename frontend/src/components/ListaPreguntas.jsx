import { useState } from "react";
import '../components/estilos-preguntas.css';

const ListaPreguntas = ({ datos }) => {
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleExpansion = (id) => {
    setExpandedQuestions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Agrupar preguntas por tema
  const groupedQuestions = datos.reduce((acc, question) => {
    if (!acc[question.tema]) {
      acc[question.tema] = [];
    }
    acc[question.tema].push(question);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedQuestions).map((tema) => (
        <div key={tema} className="faq-topic">
          <h2>&nbsp;&nbsp;&nbsp;{tema}</h2>
          <div className="faq-pair-container">
            {groupedQuestions[tema].map((q, index) => (
              <div key={q.id} className="faq-item">
                <h2 style={{fontSize:"25px"}} onClick={() => toggleExpansion(q.id)} className="faq-question">
                  {q.pregunta}
                </h2>
                {expandedQuestions[q.id] && <p>{q.respuesta}</p>}
                <button onClick={() => toggleExpansion(q.id)}>
                  {expandedQuestions[q.id] ? 'Ocultar Respuesta -' : 'Mostrar Respuesta +'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaPreguntas;

