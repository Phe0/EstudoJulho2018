var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var pesoValido = true;
var alturaValida = true;

var tdimc = paciente.querySelector(".info-imc");

if(peso < 0 || peso > 1000){
    console.log("Peso inválido");
    pesoValido = false;
    tdimc.textContent = "Peso inválido";
}

if(altura < 0 || altura > 3){
    console.log("Altura Inválida");
    alturaValida = false;
    tdimc.textContent = "Altura inválida";
}

if(pesoValido && alturaValida){
    var imc = peso / (altura * altura);

    tdimc.textContent = imc;
}

console.log(imc);