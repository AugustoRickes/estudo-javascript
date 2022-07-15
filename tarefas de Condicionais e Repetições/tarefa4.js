//Leia 10 valores reais e calcule seu somatório utilizando
//a instrução while

var nums = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
var i = 0;
var soma = 0;
while (i < nums.length) {
    soma += nums[i];
    i++;

}
console.log(soma);