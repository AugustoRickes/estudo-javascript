var altura = document.querySelector(".altura");
var peso = document.querySelector(".peso");
var calcular = document.querySelector(".calcular");
var resultado = document.querySelector(".resultado");
var resultadoFinal = document.querySelector(".resultadoFinal");
var IMC, altura, peso;

calcular.addEventListener("click", () => {

    altura = altura.value;
    peso = peso.value;
    IMC = peso / (altura ** 2);
    resultado.innerText = IMC;

});