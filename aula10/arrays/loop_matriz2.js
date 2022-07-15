var pessoas = [{
        nome: "aecio",
        idade: 22
    },
    {
        nome: "augusto",
        idade: 24
    },
    {
        nome: "isabelle",
        idade: 25
    }
];

for(var pessoa of pessoas){
    var message = `Nome: ${pessoa.nome} Idade: ${pessoa.idade}`;
    console.log(message);
}