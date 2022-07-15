// var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
    var color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = color;
}



//aciona a rave
// setInterval(bgColor,100)
// function bgColor(){
//     var color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = color;
// }