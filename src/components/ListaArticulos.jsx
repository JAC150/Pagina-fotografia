import { useState } from "react";
import ListaArticulosCard from "./ListaArticulosCard";

export function ListaArticulos({ datos }) {
  

  return (
    <>
      {datos && datos.length > 0 ? datos.map(el => (
          <ListaArticulosCard key={el.id} el={el} />
        )) : <h2>No hay datos</h2>}
     
    </>
  );
}
