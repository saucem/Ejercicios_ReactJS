import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { toast, Flip } from "react-toastify"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuario logueado:", user.email);
        toast.success("¡Iniciaste sesión!", {autoClose:3000})
        navigate(-1); //
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error en el login:", errorCode, errorMessage);
        toast.error("Error: " + errorMessage, {autoClose: 3000}
        )
      });
  };
  return (
    <div className="container above-the-fold d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column text-light">
        <h2 className="mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className="border border-secondary rounded p-3">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              name="password"
            />
          </div>
          <hr />
          <button type="submit" className="btn btn-warning w-100 mb-2">Ingresar</button>
          <p className="text-small text-secondary">¿Aún no tenes cuenta? <span className="text-light">Registrate aquí</span></p>
        </form>
      </div>
    </div>
  );
};
export default Login;
