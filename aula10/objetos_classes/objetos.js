// var meuCarro = new Object();

// definindo propriedades do meu carro

// meuCarro.fabricante = "Chevrolet";

// meuCarro.modelo = "Onix";
// meuCarro.ano = "2022";
// meuCarro.motor; // propriedade nao definida

// console.log(meuCarro);

// meuCarro.motor = "1.4";
// meuCarro["motor"] = "1.4";

// console.log(meuCarro);


// var segundoObjeto = new Object();
// str = "minhaString";
// aleat = Math.random();
// obj = new Object();




// segundoObjeto.tipo = "qualquer coisa";
// segundoObjeto["data de cadastro"] = "30/06/22";
// segundoObjeto[str] = "texto que quiser";
// segundoObjeto[aleat] = "qualquer";
// segundoObjeto[obj] = "objeto";



// console.log(segundoObjeto);









// var nomeDaPropriedade = "fabricante";
// var carro = new Object();

// carro[nomeDaPropriedade] = "ferrari";
// console.log(carro);

// nomeDaPropriedade = "modelo";
// carro[nomeDaPropriedade] = "hilux";
// console.log(carro);









var carro = new Object(); //criou-se o objeto
var nomeDaPropriedade = "fabricante"; // criou-se a propriedade chamada fabricante
carro[nomeDaPropriedade];


nomeDaPropriedade = "modelo";
carro[nomeDaPropriedade];

nomeDaPropriedade = "motor";
carro[nomeDaPropriedade];

carro.fabricante = "ferrari";
carro.modelo = "f233";
carro.motor = "4.2";

//console.log(carro);


// funcao para mostrar as propriedades de um objeto
// function mostrarPropriedadesObj (obj, nomeDoMeuObjeto){
//     var resposta = "";
//     for(var indice in obj){
//         if (obj.hasOwnProperty(indice)){
//             resposta += nomeDoMeuObjeto + "." + indice + " = " + obj[indice] + "\n";
//         }
//     }
//     return resposta;
// }
// console.log(mostrarPropriedadesObj(carro, "carro"));









function listarTodasAsPropriedades(x) {
    var objetoInspecionado;
    var resultado = [];

    for (objetoInspecionado = 0; objetoInspecionado !== null; objetoInspecionado = Object.getPrototypeOf(objetoInspecionado)) {
        resultado = resultado.concat(Object.getOwnPropertyNames(objetoInspecionado));
    }
    return resultado;

}
console.log(listarTodasAsPropriedades(carro));