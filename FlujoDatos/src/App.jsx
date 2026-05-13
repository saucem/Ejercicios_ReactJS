import './App.css'
import Layout from "./components/Layout/Layout.jsx"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Directory } from "./components/Directory/Directory.jsx";
import { ProductForm } from "./components/ProductForm/ProductForm.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout children={ <p>Este texto pasado como children del Layout se va a repetir siempre</p> } />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destacados" element={<ItemListContainer Mensaje={"Productos Destacados"} Destacados={true}/>}></Route>
        <Route path="/altaproducto" element={<ProductForm />}></Route>
      </Route>
    </Routes>
  );
}

export default App
