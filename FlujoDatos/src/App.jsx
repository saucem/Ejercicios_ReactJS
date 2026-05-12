import Layout from "./components/Layout/Layout.jsx"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Directory } from "./components/Directory/Directory.jsx";
import { ProductForm } from "./components/ProductForm/ProductForm.jsx";
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout children={ <p>Este texto pasado como children del Layout se va a repetir siempre</p> } />}>
        <Route path="/" element={<h1>Página de inicio</h1>}></Route>
        <Route path="/destacados" element={<ItemListContainer Mensaje={"Productos Destacados"}/>}></Route>
        <Route path="/altaproducto" element={<ProductForm />}></Route>
      </Route>
    </Routes>
  );
}

export default App
