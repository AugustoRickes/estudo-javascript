var peso = 80 ;
var altura = 1.80;

imc = peso / (altura ** 2);

if (imc < 20.7) {
    console.log("abaixo do peso");
} else if (imc >= 20.7 && imc < 26.4) {
    console.log("peso normal");
    
} else if (imc >= 26.4 && imc < 27.8) {
    console.log("pouco acima do peso");

} else if (imc >=27.8 && imc < 31.1) {
    console.log("acima do peso");
}
else{
    console.log("obeso");
}