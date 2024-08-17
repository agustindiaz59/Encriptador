const textarea = document.querySelector("#entrada");
const vacio = document.querySelector('.muestra_vacia');
const contenido = document.querySelector('.muestra_no_vacia');
const salida = document.querySelector("#salida")

cambiar();

function cambiar(){
    if (textarea.value.length > 0) {
        vacio.style.display = "none";
        contenido.style.display = "block";
    } else {
        vacio.style.display = "block";
        contenido.style.display = "none";
    }
}
function validarTexto(){
    let texto = textarea.value;
    if(/[A-Z]/.test(texto)){
        alert("El texto NO debe contener mayusculas");
        return false;
    }
    if(/[áéíóúÁÉÍÓÚñÑüÜàèìòùÀÈÌÒÙäëïöüÄËÏÖÜçÇß¡¿]/.test() || /[^a-zA-Z0-9\s]/.test(texto)){
        alert("El texto no debe contener simbolos especiales ni letras con acento")
        return false;
    }
    return true;
}

function encriptar(){
    let texto = textarea.value;

    if(!validarTexto()){
        return 0;
    }

    let regex = new RegExp("[aeiou]","g");
    let aux = texto.replace(regex, function(vocal){
        switch(vocal){
            case "a":
                return "ai"
            case "e":
                return "enter"
            case "i":
                return "imes"
            case "o":
                return "ober"
            case "u":
                return "ufat"
        }
    });
    salida.value = aux;
}

function desencriptar(){
    let texto = textarea.value;
    
    if(!validarTexto()){ //Valido el texto
        return 0;
    }

    let regex = new RegExp("(ai|enter|imes|ober|ufat)","g");
    let aux = texto.replace(regex, function(txt){
        switch(txt){
            case "ai":
                return "a"
            case "enter":
                return "e"
            case "imes":
                return "i"
            case "ober":
                return "o"
            case "ufat":
                return "u"
        }
    })
    salida.value = aux;
}

function copiar(){
    navigator.clipboard.writeText(salida.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        }
    );
}