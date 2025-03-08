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
}

export { contenedor };