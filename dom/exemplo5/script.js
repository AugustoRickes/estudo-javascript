document.getElementsByTagName("button")[0].addEventListener("click", validarFormulario);

function validarCampo(campo) {
    return !(campo.length == 0);
}

function validarFormulario(event) {
    var nome = document.getElementsByTagName("input")[0].value;
    var nome = document.getElementsByTagName("input")[1].value;
    if (validarCampo(nome) && validarCampo(senha)) {
        alert("enviado.");
    } else {
        alert("preencha todos os campos")
        event.preventDefault(); // interromper o evento padrao de envio do formulario
    }
}