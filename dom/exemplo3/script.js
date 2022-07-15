// bgGradient; // referencia a ela
//bgGradient(); // executando ela;

//(html) onclick="bgGradient()" ->inline por atributo
// (js) quadrado.onclick = bgGradient -> por propriedade
// (js) quadrado.addEventListener("click", bgGradient); ->ouvidor de eventos

var quadrado = document.getElementById("quadrado");

function bgGradient() {
    var gradient = "linear-gradient(orangered,orange)";
    quadrado.style.background = gradient;
    //quadrado.removeEventListener("click", bgGradient);
}
//quadrado.onclick = bgGradient;

function bgColor(){
    quadrado.style.background="green";
}

quadrado.addEventListener("mouseover", bgGradient);
quadrado.addEventListener("mouseout", bgColor);


// quadrado.addEventListener("click",() => {
//     var gradient = "linear-gradient(orangered,orange)";
//     quadrado.style.background = gradient;
// });