// Recibe las props usando destructuring
import { useState, useEffect } from "react";
import style from "./contact.module.css"

export function Contact({ nombre, email, puesto, foto }) {
  return (
    <div className={style.profile}>
      <img src={foto} alt="Foto de perfil" width={100}/>
      <h3>{nombre}</h3>
      <p>Email: {email}</p>
      <p>{puesto}</p>
    </div>
  );
}
