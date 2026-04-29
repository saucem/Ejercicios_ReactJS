import { Contact } from "../Contact/Contact";

export function ContactList({ contactos }) {
  return (
    <div style={{
      padding: "1rem, 0",
      display: "flex",
      justifyContent: "center", 
      gap: "30px"
      }}>
      {contactos.map((contacto) => (
        <Contact key={contacto.id} {...contacto} />
      ))}
    </div>
  );
}
