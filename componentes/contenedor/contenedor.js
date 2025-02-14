    function contenedor() { 
        let contenedor = document.createElement("div");
        contenedor.className = "contenedor";

        let header = document.createElement("h2");
        header.innerText = "Personal";
        header.style.marginBottom = "20px"; 

        for (let i = 1; i <= 12; i++) {
            let div = document.createElement("div");
            div.className = `cuadro cuadro-${i}`;

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";

            let label = document.createElement("label");
            label.innerText = `Cuadro ${i}`;
            label.className = "texto-cuadro";

            let cuadroDiv = document.createElement("div");
            cuadroDiv.className = `div-cuadro-${i}`;

            

            div.addEventListener("click", function () {
                checkbox.checked = !checkbox.checked;
                div.classList.toggle("seleccionado", checkbox.checked);
                label.classList.toggle("texto-seleccionado", checkbox.checked);
            });
        



            div.appendChild(checkbox);
            div.appendChild(label);
            div.appendChild(cuadroDiv);
            contenedor.appendChild(div);
        }

        return contenedor;
    }

    export { contenedor };
