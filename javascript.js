const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required")

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    const nomeValido = nameValidate();
    const telValido = telValidate();

    // Se ambos os campos forem válidos, envie o formulário
    if (nomeValido && telValido) {
        form.submit(); // Envia o formulário programaticamente
    }
});

function setError(index){
    campos[index].style.border = "2px solid #e63636";
    spans[index].style.display = "block";
}

function removeError(index){
    campos[index].style.border = "2px solid #36e668";
    spans[index].style.display = "none";
}

function nameValidate(index){
    if(campos[0].value.length < 8){
        setError(0);
        return false;
    }
    else{
        removeError(0);
        return true;
    }
}

function telValidate(){
    if(campos[1].value.length < 11){
        setError(1);
        return false;
    }
    else{
        removeError(1)
        return true;
    }
}