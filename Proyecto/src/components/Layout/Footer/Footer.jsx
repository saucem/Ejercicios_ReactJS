import { Directory } from "../../Directory/Directory";
import styles from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container">
      <div className="row text-light py-2">
        <div className="col-lg-4 d-flex flex-column flex-md-row flex-lg-column justify-content-center justify-content-md-around justify-content-lg-center align-items-center align-items-lg-start">
          <div className="col-md-6 col-lg-12 d-flex justify-content-md-end justify-content-lg-start align-items-center my-4">
            <img
              src="../images/icons/goodwork_logo_black.svg"
              alt="Logo WoodWork"
              width={"36"}
              className="inverted"
            />
            <span className="fw-bold fs-3 col-md-6 ms-2">GoodWork</span>
          </div>
          <div className="col-md-6 col-lg-12">
            <p>Calle Principal y Diagonal 2 - Parque Industrial Pilar</p>
            <p>Provincia de Buenos Aires, Argentina</p>
            <p>11 3256-7886</p>
            <p>ventas@goodwork.com</p>
          </div>
        </div>
        <div className="col-lg-8">
          <Directory />
        </div>
      </div>
      <h6 className={styles.copyright}>GoodWork&copy; · Curso React 2026</h6>
    </footer>
  );
}

export default Footer;
