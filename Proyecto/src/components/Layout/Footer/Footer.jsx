import { Directory } from "../../Directory/Directory";
import styles from "../Footer/Footer.module.css"
import { Link } from "react-router-dom";

function Footer() {
    return (
    <footer className={styles.container}>
      <div className={styles.row}>
        <div className={styles.infoContainer}>
          <div className={styles.navbrand}>
            <img src="../images/icons/goodwork_logo_black.svg" alt="Logo WoodWork" width={"36"} />
            <span>GoodWork</span>
          </div>
          <p>Calle Principal y Diagonal 2 - Parque Industrial Pilar</p>
          <p>Provincia de Buenos Aires, Argentina</p>
          <p>11 3256-7886</p>
          <p>ventas@goodwork.com</p>
        </div>
        <div className={styles.staffContainer}>
          <Directory />
        </div>
      </div>
      <h6 className={styles.copyright}>GoodWork&copy; · Curso React 2026</h6>
    </footer>
  );
}

export default Footer