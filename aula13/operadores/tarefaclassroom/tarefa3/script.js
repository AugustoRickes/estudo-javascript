var emprestado = parseFloat(prompt("digite quanto voce quer emprestado "));
var tempo = parseFloat(prompt("digite em quantos meses voce pretende pagar "));
var taxa = 0.02;

m = emprestado*(1+taxa)**tempo;
message = "voce pagara R$ " + m + " ao final do periodo"
alert(message);


