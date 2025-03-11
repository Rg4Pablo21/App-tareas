<<<<<<< HEAD
function contenedor() { 
    let contenedor = document.createElement("div");
    contenedor.className = "contenedor";
  
    // Función para consultar las tareas desde el servidor y mostrarlas en la página
    function consultarTareas() {
        fetch('http://localhost:3000/tareas') // URL correcta para la API
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log('Tareas:', data);
            // Si no hay tareas, mostrar un mensaje
            if (data.length === 0) {
                let noTasksMessage = document.createElement("p");
                noTasksMessage.innerText = "No hay tareas pendientes.";
                contenedor.appendChild(noTasksMessage);
            } else {
                data.forEach(task => {
                    let div = document.createElement("div");
                    div.className = "cuadro";

                    let checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.className = "checkbox";
                    checkbox.checked = task.completado;  // Marca el checkbox si la tarea está completada

                    // Evento para cambiar el estado de completado
                    checkbox.addEventListener('change', () => actualizarTarea(task.id, checkbox.checked));

                    let label = document.createElement("label");
                    label.innerText = task.nombre;
                    label.className = "texto-cuadro";

                    if (task.descripcion) {
                        let descripcion = document.createElement("p");
                        descripcion.className = "descripcion";
                        descripcion.innerText = task.descripcion;
                        div.appendChild(descripcion);
                    }

                    let deleteButton = document.createElement("button");
                    deleteButton.innerText = "Eliminar";
                    deleteButton.className = "delete-button";
                    // Confirmación antes de eliminar
                    deleteButton.addEventListener('click', () => {
                        if (window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
                            eliminarTarea(task.id, div);
                        }
                    });

                    div.appendChild(checkbox);
                    div.appendChild(label);
                    div.appendChild(deleteButton);
                    contenedor.appendChild(div);
                });
            }
        })
        .catch(error => {
            console.error('Error al cargar tareas:', error);
        });
    }

    // Función para actualizar el estado de la tarea
    function actualizarTarea(id, completado) {
        fetch(`http://localhost:3000/tareas/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completado: completado }),  // Actualiza el estado de la tarea
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al actualizar la tarea');
            }
            console.log('Tarea actualizada correctamente');
        })
        .catch(error => {
            console.error('Error al actualizar la tarea:', error);
        });
    }

    // Función para eliminar una tarea
    function eliminarTarea(id, div) {
        fetch(`http://localhost:3000/tareas/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar la tarea');
            }
            console.log('Tarea eliminada correctamente');
            div.remove();  // Elimina la tarea de la interfaz
        })
        .catch(error => {
            console.error('Error al eliminar la tarea:', error);
        });
    }

    // Llamar la función para cargar las tareas al inicio
    consultarTareas();
  
    let header = document.createElement("h2");
    header.innerText = "Tareas Pendientes";
    header.style.marginBottom = "20px"; 
  
    let taskInputDiv = document.createElement("div");
    taskInputDiv.className = "task-input";
  
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Escribe una tarea...";
  
    let button = document.createElement("button");
    button.innerText = "Añadir Tarea";
  
    // Agregar evento al botón para enviar la nueva tarea
    button.addEventListener('click', function() {
        const tarea = input.value; // Obtener el texto de la tarea
  
        if (!tarea) return alert("Por favor, escribe una tarea");
  
        // Hacer una solicitud POST para agregar la tarea
        fetch('http://localhost:3000/tareas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre: tarea }),  // Enviar 'nombre' de la tarea al servidor
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al agregar la tarea');
            }
            console.log('Tarea agregada correctamente');
            input.value = '';  // Limpiar el input después de agregar la tarea
            contenedor.innerHTML = '';  // Limpiar la lista actual
            consultarTareas();  // Volver a cargar las tareas después de agregar una nueva
        })
        .catch(error => {
            console.error('Error al agregar la tarea:', error);
        });
    });
  
    taskInputDiv.appendChild(input);
    taskInputDiv.appendChild(button);
    contenedor.appendChild(header); // Agregar el header con el título
    contenedor.appendChild(taskInputDiv);
  
    return contenedor;
=======
async function consultarTareas() {
  try {
    const response = await fetch('http://localhost:3000/tareas');
    if (!response.ok) throw new Error('Error en la solicitud');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

async function agregarTarea(nombre) {
  try {
    const response = await fetch('http://localhost:3000/tareas', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre })
    });
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
   
  }
}

function crearElemento(tipo, propiedades = {}, ...hijos) {
  const elemento = document.createElement(tipo);
  Object.entries(propiedades).forEach(([key, value]) => {
    elemento[key] = value;
  });
  hijos.forEach(hijo => {
    if (typeof hijo === 'string') {
      elemento.appendChild(document.createTextNode(hijo));
    } else {
      elemento.appendChild(hijo);
    }
  });
  return elemento;
}

function cargarTareasDOM(tareas, listado) {
  listado.innerHTML = "";
  tareas.forEach(({ nombre }) => {
    const div = crearElemento("div", { className: "cuadro" },
      crearElemento("input", { type: "checkbox", className: "checkbox" }),
      crearElemento("label", { className: "texto-cuadro" }, nombre)
    );
    listado.appendChild(div);
  });
}

async function inicializarTareas(listado) {
  const tareas = await consultarTareas();
  cargarTareasDOM(tareas, listado);
}

function contenedor() {
  const contenedor = crearElemento("div", { className: "contenedor" },
    crearElemento("h2", {}, "Personal"),
    crearElemento("div", { className: "listado-tareas" }, 
      crearElemento("div", { className: "task-input" },
        crearElemento("input", { type: "text", placeholder: "Write a task..." }),
        crearElemento("button", { innerText: "Add" }, "Add")
      )
    )
  );

  const listado = contenedor.querySelector(".listado-tareas");
  const input = contenedor.querySelector("input[type='text']");
  const button = contenedor.querySelector("button");

  button.addEventListener("click", async () => {
    const nuevaTarea = input.value.trim();
    if (nuevaTarea) {
      await agregarTarea(nuevaTarea);
      await inicializarTareas(listado);
      input.value = "";
    }
  });

  inicializarTareas(listado);

  return contenedor;
>>>>>>> d16179444e5e3a761d6852056106c70145cead86
}

export { contenedor };
