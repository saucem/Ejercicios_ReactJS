import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Directory } from "./components/Directory/Directory.jsx";
import { ProductForm } from "./components/ProductForm/ProductForm.jsx";
import { Routes, Route } from "react-router-dom";
import { Cart } from './components/Cart/Cart.jsx';
import HandleProducts from "./components/HandleProducts/HandleProducts.jsx"
import HandleCoupons from './components/HandleCoupons/HandleCoupons.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import Home from "./components/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx"
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/nosotros' element={<Directory />} />
        <Route path='/productos' element={<ItemListContainer Mensaje={"Productos"} Destacados={false} />} />
        <Route path='/productos/:id' element={<ItemDetail />} />
        <Route path='/destacados' element={<ItemListContainer Mensaje={"Productos Destacados"} Destacados={true} ShowBanner={true}/>} />
        <Route path='/gestionproductos' element={
          <ProtectedRoute rolesPermitidos={["admin"]}>
            <HandleProducts />
          </ProtectedRoute>
        } />
        <Route path='/carrito' element={<Cart />} />
        <Route path='/gestioncupones' element={
          <ProtectedRoute rolesPermitidos={["admin"]}>
            <HandleCoupons />
          </ProtectedRoute>
        } />
        <Route path='/login'element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App
