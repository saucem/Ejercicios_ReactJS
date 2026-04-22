import Layout from "./components/Layout/Layout.jsx"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import './App.css'

function App() {
  return (
    <>
    <Layout>
      {
        <>
          <h3>Productos</h3>
          <ItemListContainer Mensaje="Productos Destacados" />
        </>
      }
    </Layout>
    </>
  );
}

export default App
