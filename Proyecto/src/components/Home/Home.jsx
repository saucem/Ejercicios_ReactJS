import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import styles from "../Home/Home.module.css"

function Home() {
  return (
    <>
      <div className={styles.hero}>
        <span className={styles.heroTitle}>
          Combinando el toque humano con el diseño funcional 
        </span>
        <span className={styles.heroSubtitle}>
          Productos de madera natural proveniente de bosques reforestados que se integran orgánicamente en tu hogar
        </span>      
      </div>
    </>
  );
}

export default Home;
