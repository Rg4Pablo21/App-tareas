function header(){
    let header = document.createElement('header');
    header.className = "header";

    let logo = document.createElement('img');
    logo.className="imagen"
    logo.src = "https://static-cse.canva.com/blob/951768/1650logotiposqueteinspiraran.png";
    logo.alt = "";
    header.appendChild(logo);

    let h1 = document.createElement('h1');
    h1.innerText = "Let´s go";
    header.appendChild(h1);

    return header;
}

export {header}