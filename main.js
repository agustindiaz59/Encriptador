const textarea = document.querySelector("#texto");
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

function encriptar(){
    let regex = new RegExp("[aeiou]","g");
    let aux = textarea.value.replace(regex, function(vocal){
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
    let regex = new RegExp("(ai|enter|imes|ober|ufat)","g");
    let aux = textarea.value.replace(regex, function(txt){
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