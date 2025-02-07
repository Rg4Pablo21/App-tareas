function contenedor() { 
    let contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    for (let i = 1; i <= 12; i++) {
        let div = document.createElement("div");
        div.className = `cuadro-${i}`;

        // Crear checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";

        // Etiqueta con texto
        let label = document.createElement("label");
        label.innerText = `Cuadro ${i}`;

        div.appendChild(checkbox);
        div.appendChild(label);
        contenedor.appendChild(div);


        
    }

    return contenedor;
}

export { contenedor };
