/* import { ListaLibros } from "../components/ListaLibros"; */
/* import { useState } from "react"; */
/* import { helpHttp } from "../helpers/helpHTTP";  */

export function Entrevistas(){
  /* const [datos, setDatos] = useState([]); */

  /* let api = helpHttp();
  let url = "http://localhost:4500/criticas"
  useEffect(()=>{
    api.get(url).then((res)=>{
      setDatos(res)
    })
  },[])  */

    return(
      <>
        <h1 className="mt-5 text-center">Entrevistas</h1>
        <br />
        <hr />
        {/* <div className="container my-3">
          <div className="row">
            {datos && datos.length > 0 ? datos.map(el => (
              <ListaLibros key={el.id} el={el} />
            )) : <h2>No hay datos</h2>}
          </div>
        </div> */}
      </>
    )
  }