import { Contact } from "../Contact/Contact";
import styles from "../ContactList/ContactList.module.css"

export function ContactList({ contactos }) {
  return (
    <div className={styles.container}>
      {contactos.map((contacto) => (
        <Contact key={contacto.id} {...contacto} />
      ))}
    </div>
  );
}
