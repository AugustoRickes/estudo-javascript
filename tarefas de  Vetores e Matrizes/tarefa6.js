// 6.  Faça um programa que receba do usuário um vetor com 10 posições. Em seguida deverá ser impresso o maior elemento e sua posição no vetor.

var x = [102, 963, 852, 775, 607, 544, 550, 357, 299, 1846, 84, 65, 23, 82, 91, 45, 65, 87, 895, 452, 461];
var y = 0
for (var i = 0; i < x.length; i++) {
    if (x[i] > y) {
        y = x[i];
    }
}
console.log(y)