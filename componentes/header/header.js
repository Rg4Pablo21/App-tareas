function header(){
    let header = document.createElement('header');
    header.className = "header";

    let logo = document.createElement('img');
    logo.className="imagen"
    logo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwwJkOTCniBk3XcgBMR6hzexhFt530sIHlg&s";
    logo.alt = "";
    header.appendChild(logo);

    let h1 = document.createElement('h1');
    h1.innerText = "Personal";
    h1.className="texto"
    header.appendChild(h1);

    return header;
}

export {header}