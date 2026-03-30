import React from "react";

// MODO LITERAL Y FÁCIL DE COMPRENDER, AUNQUE TEDIOSO DE ESCRIBIR
// export function TarjetaUsuario(props) {
//   return (
//     <div>
//       <h2>{props.nombre}</h2>
//       <p>{props.profesion}</p>
//     </div>
//   );
// }

//UTILIZANDO DESTRUCTURING
export function TarjetaUsuario({nombre, profesion}) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{profesion}</p>
    </div>
  );
}