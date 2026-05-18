import './App.css'
import Layout from "./components/Layout/Layout.jsx"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Directory } from "./components/Directory/Directory.jsx";
import { ProductForm } from "./components/ProductForm/ProductForm.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import { ProductFormContainer } from './components/ProductForm/ProductFormContainer.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path='/nosotros' element={<Directory/>}></Route>
        <Route path="/destacados" element={<ItemListContainer Mensaje={"Productos Destacados"} Destacados={true}/>}></Route>
        <Route path="/altaproducto" element={<ProductFormContainer />}></Route>
      </Route>
    </Routes>
  );
}

export default App
