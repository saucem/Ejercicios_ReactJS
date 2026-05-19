import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalle del producto</h2>
      <p>
        Mostrando información para el producto con ID: <strong>{id}</strong>
      </p>
    </div>
  );
};

export default ItemDetail;
