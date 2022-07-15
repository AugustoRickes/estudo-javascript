//maior numero
var nums = [12,12,45,67,89,87,65,43,12,43,87,86,46,53,98,123,456,768,435,124];

var maior = 0 ;
for(var i = 0; i < nums.length; i++) {
    if(nums[i] > maior) {
        maior = nums[i];
    }
}
console.log(maior);