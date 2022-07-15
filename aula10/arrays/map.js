var salarios = [4000,3500,2500,3000];

function dezPorCento(salario) {
    return (salario * 1.1).toFixed(2);
}
console.log(salarios);
salarios = salarios.map(dezPorCento);
console.log(salarios);
