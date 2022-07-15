var salarios = [4000, 3500, 2500, 3000, 1000, 2000];

function maiorQue3K(salario) {
    return (salario > 2000)
};

console.log(salarios);
salarios = salarios.filter(maiorQue3K);
console.log(salarios);