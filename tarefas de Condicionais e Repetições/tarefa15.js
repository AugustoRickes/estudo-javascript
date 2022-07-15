// Criar uma função que converta uma temperatura de
// Fahrenheit para Celsius


function converterDeFahrenheitParaCelsius(fc) {
    return ((fc - 32) * 5 / 9);
}
var faToC = converterDeFahrenheitParaCelsius(74);
console.log(faToC);