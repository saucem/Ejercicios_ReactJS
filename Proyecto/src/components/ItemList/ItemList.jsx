import { Item } from "../Item/Item.jsx";
import styles from "./ItemList.module.css"

export function ItemList({ productos }) {
  return (
    <div className={styles.cardContainer}>
      {productos.map((prod) => (
        //<Link to={`/productos/${prod.id}`}>
          <Item key={prod.id} {...prod} />
        //</Link>
      ))}
    </div>
  );
}
