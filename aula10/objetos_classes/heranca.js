// class Animal {
//     constructor(nome) {
//         this.nome = nome;
//     }
     //meus metodos
//     falar() {
//         console.log(this.nome + 'emite um barulho.');
//     }
// }

// heranca de uma classe em js
// class Cachorro extends Animal {
//     falar() {
//         console.log(this.nome + ' latidos. ')
//     }
// }

 // instancia o objeto cachorro

// var nomePet = "luna";
// let meuPet=new Cachorro(nomePet);
// meuPet.falar();




// usando a palavra-chave (super)

class Felinos{ // classe principai (pai)
    constructor(nome){
        this.nome=nome;
    }
    // criando metodos
    falar(){
        console.log(this.nome + ' faca barulho ');
    }
}

// classe filha (heranca)
class Leao extends Felinos{
    falar(){
        super.falar();
        console.log(this.nome + ' rugido do leao. ');
    }
}

// instanciando objeto leao

let meuLeao = new Leao('simba');
meuLeao.falar();
