var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    console.log(pacientes[i]);

    var paciente = pacientes[i];

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
        paciente.classList.add("paciente-invalido");
    }

    if(altura < 0 || altura > 3){
        console.log("Altura Inválida");
        alturaValida = false;
        tdimc.textContent = "Altura inválida"; 
        paciente.classList.add("paciente-invalido"); 
    }

    if(pesoValido && alturaValida){
        tdimc.textContent = calculaImc(peso, altura);
    }
} 

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}



