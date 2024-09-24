import { Tarea } from "./Tarea";

type ListaTareasProps = {
  listaTareas: string[]; // Lista de tareas a mostrar
  borrarTarea: (index: number) => void; // Función para borrar una tarea
  modificarTarea: (index: number, nuevoValor: string) => void; // Función para modificar una tarea
};

export const ListaTareas = ({ listaTareas, borrarTarea, modificarTarea }: ListaTareasProps) => {
  return (
    <div className="taskList">
      {/* Iteramos sobre la lista de tareas y renderizamos cada una con su respectivo componente Tarea */}
      {listaTareas.map((tarea, index) => (
        <Tarea
          key={index} // Clave única para identificar cada tarea
          tarea={tarea} // Pasamos la tarea actual como prop
          borrarTarea={() => borrarTarea(index)} // Función para eliminar la tarea actual, pasando su índice
          modificarTarea={(nuevoValor) => modificarTarea(index, nuevoValor)} // Función para modificar la tarea actual, pasando el nuevo valor y el índice
        />
      ))}
    </div>
  );
};
