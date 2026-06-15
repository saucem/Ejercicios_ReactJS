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
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
