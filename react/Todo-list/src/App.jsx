import { useState } from 'react';
import FreeCodeCampLogo from './img/FreeCodeCampLogo.png';
import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';
import './App.css';

const complete = (completada) => {
  completada = !completada;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={FreeCodeCampLogo} className='freecodecamp-logo' />
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <TareaFormulario />
        <Tarea texto={"Soy una tarea"} />
      </div>

    </div>
  )
}

export default App
