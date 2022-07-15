// idade <=12 --- crianca
//idade >12 e <18 --- adolescente
// idade >=18 e <60 -- adulto
// idade >=60 -- idoso

idade = 24;
if (idade >= 0 && idade <= 12) {
    console.log("crianca");
} else if (idade > 12 && idade < 18) {
    console.log("adolescente");
} else if (idade >= 18 && idade < 60) {
    console.log("adulto")
} else if (idade >=60 && idade <= 130) {
    console.log("idoso");
}
else{
    console.log("idade invalida");
}

