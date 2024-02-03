import { useState } from 'react';
import React from "react";
import "../css/ListaDeTareas.css";
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea.jsx';


function ListaDeTareas () {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim(); //Quitames los espacios al texto

      const tareasActualizadas = [tarea, ...tareas]; // Creamos un nuevo arreglo con las tareas que ya existen mas la tarea nueva
      setTareas(tareasActualizadas); // Agregamos el nuevo arreglo a tareas, ya que si le pasaramos solo (tarea) al arreglo tareas no se agregaria la nueva tarea sino que se reescribiria solo con la nueva
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); // Con filter le decimos que si tarea con el id es diferente del id que le pasamos se agregue a tareas actualizadas pero si es igual no se agregue, leer mas sobre filter
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) =>{
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} /> { /* Nosotros le estamos pasando al prop onSubmit(cuando se evnia el formulario) la funcion mas no la activacion de la funcion, esto le permite llamarla en TareaFormulario cuando necesite agregar una nueva tarea, y como recibe como parametro tarea, se le pasa el objeto con la nueva tarea del otro lado*/ }
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
        }
      </div>
    </>
  ); 
}

export default ListaDeTareas;