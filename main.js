import { footer } from "./componentes/footer/footer.js";
import { header } from "./componentes/header/header.js";
import { contenedor } from "./componentes/contenedor/contenedor.js";


let DOM = document.querySelector("#root");



DOM.appendChild(header());
DOM.appendChild(contenedor());
DOM.appendChild(footer());
