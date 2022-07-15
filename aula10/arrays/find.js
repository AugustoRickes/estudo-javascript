var salarios = [4000, 3500, 2500, 3000, 1000, 2000];

function maiorQue3K(salario) {
    return (salario < 3000);
}

console.log(salarios.filter(maiorQue3K));
console.log(salarios.find(maiorQue3K));
console.log(salarios.findIndex(maiorQue3K));