//        indice        0,      1,        2...
// var techs = new Array("html", "css", "javascript", "angular", "java");

// for (var indice in techs) {
//     console.log("posicao " + indice + " " + techs[indice]);
// };


// var matriz = [1,2,3,4,5,6,7,8,9];
// for(var i=0; i<matriz.length; i++){
//     console.log(i + " - " + matriz[i])
// }

// var numeros = [1,2,3,4,5,6,7,8,9];//array
// var valorTotal = 0;// uma variavel comecando  em zero

//function
// function somar (item){
//     valorTotal += item
// }

// numeros.forEach(somar);
// console.log(valorTotal)





// var numeros = [3,5,4,6,8];
// var total =0;

// function somar_com_2_parametros(item, indice){
//     total += item;
//     console.log("[indice " + indice + "] = " + total + " --> ");
// }

// numeros.forEach(somar_com_2_parametros);



// var numeros = [1,2,3,4,5,6,7,8,9,10];
// function tabuada7(x){
//     console.log(x + " x 7 = " + x*7);
// }
// numeros.forEach(tabuada7);


// cores = ["amarelo", "Verde", "azul", "Vermelho", "rosa"];
// coresIniciadasComV = [] ;
// novoIndice = 0;

// function imprimirCores(itens){
//     console.log(itens);
// }
//cores.forEacho(imprimirCores);

// function selecionarCores(item, indice) {
//     if (cores[indice].indexOf("V") == 0) {
//         coresIniciadasComV[novoIndice] = cores[indice];
//         novoIndice++;
//     }
// }
// cores.forEach(selecionarCores);
// console.log(coresIniciadasComV);





// nomes = ["Augusto", "Brenda", "Debora", "kelvin", "feliPE"];
// console.log(nomes);

// function converterParaMaiusculo(item, indice) {
//     nomes[indice] = nomes[indice].toUpperCase();

// }

// function converterParaMinusculo(item, indice) {
//     nomes[indice] = nomes[indice].toLowerCase();

// }

// nomes.forEach(converterParaMaiusculo);
// console.log(nomes);
// nomes.forEach(converterParaMinusculo);
// console.log(nomes);



// nomes = ["Augusto Rickes xxxxxx", "Adriano Gomes", "Frederico Chaves"];
// tamanhoNome = 0;
// nome = "";


// function maiorNome(item, indice) {
//     if (nomes[indice].length > tamanhoNome) {
//         nome = nomes[indice];
//         tamanhoNome = nomes[indice].length;
//     }
// }

// nomes.forEach(maiorNome);
// console.log(nome);


// for (var x = 0; x < 10; x++) {
//     if (x % 2) {
//         continue;
//     }
//     console.log(+x + " ")``
// }