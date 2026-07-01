import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

function HandleCoupons() {
  const [coupons, setCoupons] = useState([]);

  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");

  const getCoupons = async () => {
    try {
      const response = await getDocs(collection(db, "coupons"));
      const couponsList = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCoupons(couponsList);
    } catch (error) {
      console.error("Error al obtener los cupones:", error);
      alert("ocurrió un error al cargar los cupones.");
    }
  };

  // Crear cupón  CREATE
  const createCoupon = async (e) => {
    e.preventDefault();

    if (!code || !discount) {
      alert("Complete todos los campos");
      return;
    }

    const percent = Number(discount);

    if (percent < 1 || percent > 100) {
      alert("El descuento debe estar entre 1 y 100.");
      return;
    }

    try {
      await addDoc(collection(db, "coupons"), {
        code,
        discount: Number(discount),
      });

      setCode("");
      setDiscount("");

      await getCoupons();
    } catch (error) {
      console.error(error);
      alert("Error al crear el cupón.");
    }
  };

  // Eliminar cupón
  const deleteCoupon = async (id) => {
    try {
      await deleteDoc(doc(db, "coupons", id));

      alert("Cupón eliminado correctamente");

      await getCoupons();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar el cupón.");
    }
  };

  useEffect(() => {
    getCoupons();
  }, []);

  return (
    <div>
      <h2>Administración de Cupones</h2>

      <h3>Listado de Cupones</h3>

      {coupons.map((cupon) => (
        <div
          key={cupon.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
            color: "white",
          }}
        >
          <p>
            <strong>Código:</strong> {cupon.code}
          </p>

          <p>
            <strong>Descuento:</strong> {cupon.discount}%
          </p>

          <button onClick={() => deleteCoupon(cupon.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default HandleCoupons;
