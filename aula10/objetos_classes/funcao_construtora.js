 function Telefones(marca, modelo, sistema, proprietario) {
     this.marca = marca;
     this.modelo = modelo;
     this.sistema = sistema;
     this.proprietario = proprietario;
 }

 function Pessoa(nome, sexo, idade) {
     this.nome = nome;
     this.sexo = sexo;
     this.idade = idade;
 }
 var alunos = new Pessoa("otavio", "M", 33);
 var meuTelefone = new Telefones("samsung", "s22", "android", alunos);
 console.log(meuTelefone);
 // var professores = new Pessoa("adriano", "M", 36);
 // var funcionarios = new Pessoa("fulano", "M", 20);


