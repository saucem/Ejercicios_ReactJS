import './App.css'
import Header from './components/Layout/Header/Header'
import { Layout } from './components/Layout/Layout';


function App() {
  return (
    <>
      <Layout>
        {/* Todo lo que pongamos acá adentro irá dentro de donde estaba {children} */}
        <h1>¡Bienvenidos a mi página!</h1>
        <p>Éste es el contenido principal</p>
      </Layout>
    </>
  );
}

export default App
