import { Item } from "../Item/Item";

export function ItemList({ productos }) {
  return (
    <div style={{
      padding: "1rem, 0",
      display: "flex",
      justifyContent: "end", 
      gap: "30px"
      }}>
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}
