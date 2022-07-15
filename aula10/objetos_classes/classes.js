// // criando uma classe 
// class Retangulo {
//     constructor(altura, largura) {
//         this.altura = altura;
//         this.largura = largura;
//     }
//     // meus proprios metodos da minha classe 
//     calculaArea() {
//         return this.altura * this.largura;
//     }
//     calculaPerimetro() {
//         return (this.altura + this.largura) * 2;
//     }
//     //getter
//     get getArea() {
//         return this.calculaArea();
//     }
//     get getAPerimetro() {
//         return this.calculaPerimetro();
//     }
// }
// const figura = new Retangulo(15, 5);
// console.log(figura.getArea);
// console.log(figura.getAPerimetro);



// metodos estaticos

// class Ponto {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     static distancia(a, b) {
//         const dx = a.x - b.x
//         const dy = a.y - b.y;
//         return Math.hypot(dx, dy);
//     }
// }
// const ponto1 = new Ponto(5, 5);
// const ponto2 = new Ponto(10, 10);

// ponto1.distancia;
// ponto2.distancia;

// console.log(Ponto.distancia(ponto1, ponto2));


class Animal{
    falar(){
        return this;
    }
    static comer(){
        return this;
    }
}

let objetoGato = new Animal();
objetoGato.falar();

//let falar = objetoGato.falar;