import './App.css'
import Layout from "./components/Layout/Layout.jsx"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Directory } from "./components/Directory/Directory.jsx";
import { ProductForm } from "./components/ProductForm/ProductForm.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import { ProductFormContainer } from './components/ProductForm/ProductFormContainer.jsx';
import { Cart } from './components/Cart/Cart.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/nosotros' element={<Directory />} />
        <Route path='/productos' element={<ItemListContainer Mensaje={"Productos"} Destacados={false} />} />
        <Route path='/productos/:id' element={<ItemDetail />} />
        <Route path='/destacados' element={<ItemListContainer Mensaje={"Productos Destacados"} Destacados={true}/>} />
        <Route path='/altaproducto' element={<ProductFormContainer />} />
        <Route path='/carrito' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App
