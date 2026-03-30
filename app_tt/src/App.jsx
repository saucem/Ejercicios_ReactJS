import './App.css'
import Bienvenida from './Bienvenida';
import { TarjetaUsuario } from './TarjetaUsuario';
import Contenedor from './Contenedor';

function App() {
  return (
    <div>
      <Bienvenida/>{/* Acá vamos a poner nuestro componente */}
      <p>Este es mi primer componente montado en React</p>
      <TarjetaUsuario nombre = "Silvia" profesion = "ProductOwner"/>
      <Contenedor>
        <h3>Encabezado del contenedor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum fugiat dolores sit voluptate, labore veniam ex deleniti, cumque ducimus in perferendis aliquam fugit sint eius nemo. Earum, laudantium officiis!</p>
        <br />
        <p>Pie del contenedor</p>
      </Contenedor>
    </div>
  );
}
export default App
