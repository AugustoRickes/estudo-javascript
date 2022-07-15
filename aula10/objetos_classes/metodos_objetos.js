meuObjeto.nomeDoMetodo = nomeDaFuncao;

var objeto = {
    atributos: "qualquer coisa",
    atributos2: "mais um",
    meuMetodo: function (parametros) {
        console.log(this.atributos + " " + this.atributos2)
        // o que eu quero que o metodo faca
    }
}

function mostarCarro() {
    var resultado = "veiculo ano" + this.ano + "fabricante " + this.fabricante + "modelo " + this.modelo;
    pretty_print(resultado);
}

this.mostarCarro = mostarCarro;

// equivalente 
function Carro(fabricante, modelo, ano, proprietario) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.proprietario = proprietario;
    this.mostarCarro = mostarCarro;
}

carroX.mostarCarro()