var msg = document.getElementById("mensagem");

var campos =document.getElementsByTagName("input");
for(var campo of campos){
    
    campo.addEventListener("focus", validarFormulario);
    campo.addEventListener("keyup", validarFormulario);
    campo.addEventListener("blur", fechar);

}

function validarFormulario(event) {
    var campo = event.target;
    if (validarCampo(campo)) {
        okaAlerta();
    }
    else {
        preencherCampoAlerta();
    }
}

function validarCampo(campo) {
    return !(campo.length == 0)
}

function preencherCampoAlerta() {
    msg.style.height = "100px";
    msg.style.backgroundColor = "rgb(255, 97, 97);"
    msg.innerText = "preencha todos os campos!"
    msg.style.height = "100px"
}

function okAlerta() {
    msg.style.backgroundColor = "green"
    msg.innerText = "ok!"
    msg.style.height = "100px"
}

function fechar(event) {
    var campo = event.target;
    if(validarCampo()){
        msg.style.height="0"
    }
}