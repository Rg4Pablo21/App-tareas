function contenedor() { 
    let contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    function consultarTareas(){
        fetch('http://localhost:3000/tareas')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    

    let header = document.createElement("h2");
    header.innerText = "Personal";
    header.style.marginBottom = "20px"; 

    let taskList = [
        "Drink 8 glasses of water",
        "Meditate for 10 minutes",
        "Read a chapter of a book",
        "Go for a 30-minute walk",
        "Write in a gratitude journal",
        "Plan meals for the day",
        "Practice deep breathing exercises",
        "Stretch for 15 minutes",
        "Limit screen time before bed"
    ];

    taskList.forEach(task => {
        let div = document.createElement("div");
        div.className = "cuadro";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";

        let label = document.createElement("label");
        label.innerText = task;
        label.className = "texto-cuadro";

        div.appendChild(checkbox);
        div.appendChild(label);
        contenedor.appendChild(div);
    });

    let taskInputDiv = document.createElement("div");
    taskInputDiv.className = "task-input";

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Write a task...";

    let button = document.createElement("button");
    button.innerText = "Add";

    taskInputDiv.appendChild(input);
    taskInputDiv.appendChild(button);
    contenedor.appendChild(taskInputDiv);

    return contenedor;
}

export { contenedor };