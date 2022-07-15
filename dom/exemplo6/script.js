var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

//div1.addEventListener("click", laranja, true);//useCapture
div1.addEventListener("click", laranja);
div2.addEventListener("click", red);

function laranja() {
    div2.innerText = "clicou laranja";
}

function red(event) {
    div2.innerText = "clicou red";
    event.stopPropagation();
}