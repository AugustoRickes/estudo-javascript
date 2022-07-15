var quadrados = document.getElementsByTagName("div"); //retorna um array elementos


for (var quadrado of quadrados) {
    quadrado.addEventListener("click", bgBlue);
}

function bgBlue(event) {
    var quadrado = event.target;
    quadrado.style.backgroundColor = "blue";

}