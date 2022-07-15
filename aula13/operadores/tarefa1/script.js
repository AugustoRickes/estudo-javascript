var altura = parseFloat(prompt("digite a altura do retangulo"));
var largura = parseFloat(prompt("digite a largura do retangulo"));

var area = altura * largura;
var perimetro = (2 * altura) + (2 * largura);

var message = "area do retangulo: " + area + "\n e perimetro: " + perimetro
alert(message);