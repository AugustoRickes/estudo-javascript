var idade = parseInt(prompt("quantos anos voce tem? "));

var expressao = (((idade >= 16) && (idade < 18)) || (idade >= 60));

var resultado = (expressao) ? "nao tem obrigacao!" : "tem obrigacao de votar!";
var voto = (idade >= 16) ? true : false;
alert(resultado);