// metodo object.create
var animais = {
    tipo: "invertebrados", //propriedade
    qualTipoAnimal: function(){
        console.log(this.tipo)
    }
}

// criar um novo tipo de animal 

var insetos = Object.create(animais);

insetos.qualTipoAnimal();

var gato = Object.create(animais);
gato.tipo = "vertebrado";
gato.qualTipoAnimal();

var peixes = Object.create(animais);
peixes.tipo = "vertebrado2";
peixes.qualTipoAnimal();

animais.prototype.cor = null;

coelho.cor = "preto";