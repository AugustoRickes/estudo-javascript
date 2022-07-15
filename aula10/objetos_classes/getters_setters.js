// getter  e setter

var objetoNumero = {
    a: 7,
    get metodoGet() {
        return this.a + 1;
    },
    set metodoSet(x) {
        this.a = x / 2;
    }
};

console.log(objetoNumero.a) // 7


console.log(objetoNumero.metodoGet) // 8

objetoNumero.metodoSet = 50;

console.log(objetoNumero.a); //25