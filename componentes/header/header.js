function header(){
    let header = document.createElement('header');
    header.className = "header";

    let logo = document.createElement('img');
    logo.className="imagen"
    logo.src = "https://isenacode.com/wp-content/uploads/2021/12/escribir-logo-apple-d.jpg";
    logo.alt = "";
    header.appendChild(logo);

    let h1 = document.createElement('h1');
    h1.innerText = "Let´s go";
    header.appendChild(h1);

    return header;
}

export {header}