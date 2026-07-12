import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { BsTrash, BsPencil } from "react-icons/bs";
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
  const [expiration, setExpiration] = useState("");
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
      toast.error("Ocurrió un error al cargar los cupones.");
    }
  };

  // Crear cupón  CREATE
  const createCoupon = async (e) => {
    e.preventDefault();

    if (!code || !discount) {
      toast.error("Complete todos los campos");
      return;
    }

    const percent = Number(discount);

    if (percent < 1 || percent > 100) {
      toast.info("El descuento debe estar entre 1 y 100.");
      return;
    }

    try {
      await addDoc(collection(db, "coupons"), {
        code,
        expiration,
        discount: Number(discount),
      });

      setCode("");
      setDiscount("");
      setShowForm(false);
      toast.success("Cupón creado!", { autoClose: 2000 });

      await getCoupons();
    } catch (error) {
      console.error(error);
      toast.error("Error al crear el cupón.");
    }
  };

  // Eliminar cupón
  const deleteCoupon = async (id) => {
    try {
      await deleteDoc(doc(db, "coupons", id));

      toast.success("Cupón eliminado correctamente");

      await getCoupons();
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar el cupón.");
    }
  };

  useEffect(() => {
    getCoupons();
  }, []);

  return (
    <div className="container d-flex flex-column above-the-fold text-light">
      <div>
        <h2 className="mb-3">Administración de Cupones</h2>
      </div>

      {showForm && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <form className="border border-1 border-secondary rounded-2 p-3">
                <div className="mb-3">
                  <label htmlFor="code" className="form-label">
                    Código
                  </label>
                  <input
                    type="text"
                    name="code"
                    className="form-control"
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expiration" className="form-label">
                    Válido hasta
                  </label>
                  <input
                    type="date"
                    name="expiration"
                    className="form-control"
                    onChange={(e) => setExpiration(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="discount" className="form-label">
                    Descuento %
                  </label>
                  <input
                    type="number"
                    name="discount"
                    className="form-control"
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <button
                    className="btn btn-success col-auto"
                    onClick={createCoupon}
                    type="submit"
                  >
                    Guardar cambios
                  </button>
                  <button
                    className="btn btn-secondary col"
                    type="button"
                    onClick={() => setShowForm(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {coupons.length > 0 && (
        <div className="container mt-4">
          <Table hover >
            <thead>
              <tr>
                <th>Código del cupón</th>
                <th>Válido hasta</th>
                <th className="text-center">Descuento</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon.id}>
                  <td>{coupon.code}</td>
                  <td>{coupon.expiration}</td>
                  <td className="text-center">{coupon.discount}%</td>
                  <td className="text-center">
                    <button
                      onClick={() => deleteCoupon(coupon.id)}
                      className="action-link me-3"
                    >
                      <BsTrash className="me-2" />Eliminar
                    </button>
                    {/*
                    <button
                      onClick={() => updateCoupon(coupon.id)}
                      className="action-link"
                    >
                      <BsPencil className="me-2" />Editar
                    </button>
                    */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {!showForm && coupons.length == 0 && (
        <div className="container">
          <div className="row text-center justify-content-center my-4">
            <h3>No hay cupones activos</h3>
            <p>Hacé clic en "Crear cupón" para crear uno nuevo.</p>
          </div>
        </div>
      )}

      {showForm ? (
        <div className="container">
          <button className="col-md-4 col-lg-2 btn btn-warning mt-4" disabled>
            Crear cupón
          </button>
        </div>
      ) : (
        <div className="container">
          <button
            className="col-md-4 col-lg-2 btn btn-warning mt-4"
            onClick={() => setShowForm(true)}
          >
            Crear cupón
          </button>
        </div>
      )}
    </div>
  );
}

export default HandleCoupons;
