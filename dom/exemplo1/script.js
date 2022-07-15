var quadrado = document.getElementById("quadrado");

quadrado.onclick = () => { //clique
    quadrado.style.backgroundColor = "red";

}

quadrado.onmouseover = () => { // mouse entra
    quadrado.style.backgroundColor = "black";
}

quadrado.onmousedown = () => { //mouse fica clicado
    quadrado.style.backgroundColor = "orange";
}
quadrado.onmouseout = () => { //mouse sai
    quadrado.style.backgroundColor = "purple";
}

quadrado.ondblclick = () => { //duplo clique
    quadrado.style.backgroundColor = "blue";
}