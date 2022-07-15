var nome = prompt("digite o nome do produto: ");
var custo = parseFloat(prompt("digite o preco de custo do produto: "));


venda = custo * 0.65;
precovenda = venda + custo;
message = "o preco do " + nome + " eh" + " R$ " + precovenda;
alert(message);