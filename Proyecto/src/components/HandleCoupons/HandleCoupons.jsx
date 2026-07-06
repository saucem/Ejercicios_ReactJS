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

  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);

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

    setShowForm(!showForm);

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
    <div
      style={{ color: "white", minHeight: "90vh" }}
      className="container d-flex flex-column"
    >
      <div>
        <h2>Administración de Cupones</h2>
      </div>

      {showForm && (
        <div className="container">
          <form action="">
            <label htmlFor="">Código</label>
            <input type="text" />
            <label htmlFor="">Valido hasta</label>
            <input type="date" />
            <label htmlFor="">Descuento %</label>
            <input type="date" />
          </form>
        </div>
      )}
      {coupons.length ? (
        <div className="row">
          <h3>Listado de Cupones</h3>
          <table className="table table-hover">
            <thead>
              <th>Código del cupón</th>
              <th>Válido hasta</th>
              <th>Descuento</th>
              <th>Acciones</th>
            </thead>
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon.id}>
                  <td>{coupon.code}</td>
                  <td>{coupon.expiration}</td>
                  <td>{coupon.discount}</td>
                  <td>
                    <button onClick={() => deleteCoupon(coupon.id)}>
                      Eliminar
                    </button>
                    <button onClick={() => updateCoupon(coupon.id)}>
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="row text-center">
          <h3>No hay cupones activos</h3>
          <p>Hacé clic en "Crear cupón" para crear uno nuevo.</p>
        </div>
      )}
      <div className="container">
        <div className="row justify-content-center my-4">
          <button
            onClick={() => createCoupon()}
            className="col-md-4 col-lg-2 btn btn-success"
          >
            {editMode ? "Guardar cambios" : "Crear cupón"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HandleCoupons;
