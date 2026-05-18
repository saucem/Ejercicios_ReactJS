import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import styles from "../Home/Home.module.css"

function Home() {
  return (
    <>
      <div className={styles.hero}>
        <h1>Carpintería orgánica</h1>
        <h2>
          Brindamos valor humano al diseño funcional 
        </h2>      
      </div>
    </>
  );
}

export default Home;
