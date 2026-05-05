import Layout from "./components/Layout/Layout.jsx"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Directory } from "./components/Directory/Directory.jsx";
import { ProductForm } from "./components/ProductForm/ProductForm.jsx";
import './App.css'

function App() {
  return (
    <>
    <Layout>
      {
        <>
          <h3>Productos</h3>
          <ItemListContainer Mensaje="Productos Destacados" />
          
          <Directory Mensaje="Nuestro Equipo" />
        </>
      }
    </Layout>
    </>
  );
}

export default App
