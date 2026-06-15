import styles from "./Contact.module.css";

export function Contact({ nombre, email, puesto, foto }) {
  return (
    <div className="col-md-4 d-flex flex-md-column justify-content-center align-items-center gap-2 my-2">
      <img
        src={foto}
        alt="Foto de perfil"
        className="col-3 col-sm-2 col-md-6 rounded-circle"
      />
      <div className="col-5 col-sm-4 col-md-12 text-md-center">
        <p className="fw-bold fs-6">{nombre}</p>
        <p>
          <strong>{puesto}</strong>
        </p>
        <p>{email}</p>
      </div>
    </div>
  );
}
