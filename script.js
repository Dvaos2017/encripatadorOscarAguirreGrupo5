var botonencriptar = document.querySelector(".btn-encriptar");
var botondesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".muneco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;

function encriptar(){
    ocultaradelante();
    var cajatexto = recuperartexto();
    resultado.textContent = encriptartexto(cajatexto)
}
function desencriptar(){
    ocultaradelante();
    var cajatexto = recuperartexto();
    resultado.textContent = desencriptartexto(cajatexto)
}
function recuperartexto(){
    var cajatexto = document.querySelector(".ingresetexto");
    return cajatexto.value
}
function ocultaradelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar")
}
function encriptartexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "ai"
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "imes"
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "ober"
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "ufat"
        }
        else{
            textofinal = textofinal + texto[i]
        }
    }
    return textofinal
}
function desencriptartexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "a";
            i = i + 1
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "e";
            i = i + 4 
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "i";
            i = i + 3
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "o";
            i = i + 3
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "u";
            i = i + 3
        }
        else{
            textofinal = textofinal + texto[i]
        }
    }
    return textofinal
}
const btncopiar = document.querySelector(".btn-copiar");
    btncopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola")
})



