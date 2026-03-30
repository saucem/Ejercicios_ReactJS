import React from "react";

export function Asistente({nombre, tarea, emoji}) {
  return (
    <div style={{textAlign: "start"}}>
      <h3>{nombre}</h3>
      <p>{tarea}{emoji}</p>
    </div>
  );
}