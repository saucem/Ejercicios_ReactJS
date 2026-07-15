import { Link } from "react-router-dom";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import styles from "../Home/Home.module.css"

function Home() {
  return (
    <>
      <div className={`container-fluid d-flex align-items-end align-items-md-center ${styles.hero}`}>
        <div className="row justify-content-lg-end w-100">
          <div className="col-lg-6 d-flex flex-column">
            <span className={styles.heroTitle}>
              Combinando el toque humano con el diseño funcional 
            </span>
            <span className={styles.heroSubtitle}>
              Productos de madera natural proveniente de bosques reforestados que se integran orgánicamente en tu hogar
            </span>
            <Link to={"/productos"} className="btn btn-lg btn-warning align-self-start mt-4">Explorar productos</Link>
          </div>
        </div>
      </div>
      <div className="container above-the-fold">
        <ItemListContainer Mensaje={"Nuestra selección del mes"} Destacados={true}/>
      </div>
    </>
  );
}

export default Home;
