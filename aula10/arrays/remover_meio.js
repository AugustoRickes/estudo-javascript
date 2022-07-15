var alunos = ["gustavo", "brenda", "nico", "luis", "gabriel b"];
console.log(alunos);

function removerMeio(indice) {
    for (var i = indice; i < alunos.length; i++) {
        alunos[i] = alunos[i + 1];
    }
    alunos.pop();
}
removerMeio(2);
console.log(alunos);