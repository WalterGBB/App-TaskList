import { useState } from "react";

type TareaProps = {
  tarea: string; // La tarea a mostrar
  borrarTarea: () => void; // Función para eliminar la tarea
  modificarTarea: (nuevoValor: string) => void; // Función para modificar la tarea
};

export const Tarea = ({ tarea, borrarTarea, modificarTarea }: TareaProps) => {
  // Estado que indica si estamos en modo de edición o no
  const [editando, setEditando] = useState(false);
  // Estado que guarda el nuevo valor de la tarea al editar
  const [nuevoValor, setNuevoValor] = useState(tarea);
  // Estado para controlar si la tarea está marcada como completada
  const [done, setDone] = useState(false);
  // Estado para asignar una clase CSS que indica el estado de la tarea (completada o no)
  const [clase, setClase] = useState("");

  // Función para guardar el cambio de la tarea
  const handleSave = () => {
    // Llama a la función modificarTarea del padre y le pasa el nuevo valor
    modificarTarea(nuevoValor);
    // Cambia el modo de edición a false, para volver a la vista normal
    setEditando(false);
  };

  // Función para marcar o desmarcar la tarea como completada
  const handleDone = () => {
    if (done) {
      // Si la tarea estaba completada, se desmarca y se quita la clase CSS
      setDone(false);
      setClase("");
    } else {
      // Si la tarea no estaba completada, se marca y se le añade la clase CSS correspondiente
      setDone(true);
      setClase("done");
    }
  };

  return (
    <div className="task">
      {editando ? (
        <>
          {/* Input controlado para editar el nombre de la tarea */}
          <input 
            type="text" 
            value={nuevoValor} 
            onChange={(e) => setNuevoValor(e.target.value)} // Actualiza el nuevo valor mientras el usuario escribe
          />
          {/* Botón para guardar el nuevo valor de la tarea */}
          <button className="save" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {/* Muestra el nombre de la tarea con la clase CSS correspondiente */}
          <span className={clase}>{tarea}</span>
          <div>
            {/* Checkbox para marcar o desmarcar la tarea como completada */}
            <input
              className="estado"
              type="checkbox" 
              checked={done} 
              onClick={handleDone}
            />
            {/* Botón para entrar en modo edición */}
            <button className="edit" onClick={() => setEditando(true)}>Edit</button>
            {/* Botón para eliminar la tarea */}
            <button className="delete" onClick={borrarTarea}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};
