// mix-ins

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    andar() {
        return this.nome + ' andou um passo. '
    }
}

const pessoaFalante = Base => class extends Base {
    falar() {
        return this.nome + ' falou: ola mundo. '

    }
}

// classe aluno extends Pessoa

const pessoaFalanteDiferente = Base => class extends Base {};
const alunoBC22 = pessoaFalanteDiferente(pessoaFalante(Pessoa));

const alunoFelipe=new alunoBC22('Felipe porto');

console.log(alunoFelipe.andar());
console.log(alunoFelipe.falar());