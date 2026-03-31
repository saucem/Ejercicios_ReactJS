import './App.css'
import { Asistente } from './Asistente';

function App() {
  const asistentes = [
    {nombre: "Juan Pérez", tarea: "Frontend Developer", emoji: "🧑‍💻"},
    {nombre: "Ana Gómez", tarea: "Diseñadora UX/UI", emoji: "🎨"},
    {nombre: "Carlos Ruiz", tarea: "Backend Developer", emoji: "🤓"}
  ];

  const listarAsistentes = asistentes.map((asistente, index) => (
    <li key={index}><Asistente{...asistente}/></li>
  ));

  return <ul>{listarAsistentes}</ul>
}

export default App
