import React from "react";

function Contenedor({children}) {
  const estilo = {
    margin: "1rem",
    padding: "0.5rem",
    color: "white",
    borderRadius: "0.25rem", //se debe utilizar camelCase para los atributos separados con guiones ya que JS no admite el guión medio
    "background-color": "teal" //en caso de quere  mantener la sintaxis pura de CSS, el atributo se debe encerrar con comillas
  };
  return <div style={estilo}>{children}</div>;
}

export default Contenedor;