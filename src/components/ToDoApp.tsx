import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const ToDoApp = () => {
  // Estado para manejar la lista de tareas
  const [listaTareas, setlistaTareas] = useState<string[]>([]);
  // Estado para controlar el input de la nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState<string>('');

  // Función para agregar una nueva tarea a la lista
  const handleAddTask = () => {
    // Si el campo está vacío, no agregamos nada
    if (nuevaTarea.trim() === '') return;
    // Agregamos la nueva tarea al final de la lista de tareas existentes
    setlistaTareas(tareasPendientes => [...tareasPendientes, nuevaTarea]);
    // Limpiamos el campo de texto para que el usuario pueda escribir otra tarea
    setNuevaTarea('');
  };

  // Función para eliminar una tarea de la lista, usando su índice
  const handleDeleteTask = (index: number) => {
    // Filtramos la tarea que no corresponde al índice dado
    setlistaTareas(tareasRegistradas => tareasRegistradas.filter((_, i) => i !== index));
  };

  // Función para actualizar una tarea existente
  const handleUpdateTask = (index: number, newValue: string) => {
    // Creamos una copia de la lista de tareas
    const nuevaListaTareas = [...listaTareas];
    // Modificamos la tarea en el índice correspondiente
    nuevaListaTareas[index] = newValue;
    // Actualizamos el estado con la lista modificada
    setlistaTareas(nuevaListaTareas);
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div className="flex">
        {/* Input controlado para ingresar el nombre de la nueva tarea */}
        <input 
          className="add"
          type="text" 
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)} // Actualizamos el estado con el valor del input
          placeholder="Ingresar nueva tarea"
        />
        {/* Botón para agregar una nueva tarea */}
        <button onClick={handleAddTask}>Add task</button>
      </div>
      {/* Componente que muestra la lista de tareas */}
      <ListaTareas
        listaTareas={listaTareas} // Pasamos el estado listaTareas como Prop al componente ListaTareas
        borrarTarea={handleDeleteTask} // Pasamos la función para borrar tareas
        modificarTarea={handleUpdateTask} // Pasamos la función para modificar tareas
      />
    </div>
  );
};
