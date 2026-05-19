import styles from "./Contact.module.css"

export function Contact({ nombre, email, puesto, foto }) {
  return (
    <div className={styles.profile}>
      <img src={foto} alt="Foto de perfil" width={100}/>
      <h4>{nombre}</h4>
      <p><strong>{puesto}</strong></p>
      <p>{email}</p>

    </div>
  );
}
