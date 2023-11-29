let virgula = document.querySelector("#virgula");
let divisao = document.querySelector("#divisao");
let multi = document.querySelector("#multiplicacao");
let sub = document.querySelector("#subtracao");
let add = document.querySelector("#adicao");
let limpar = document.querySelector("#ac");


function add_num(num) {
    let valor1 = document.getElementById("atual");
    valor1.innerHTML += num;
}

function add_operador(num) {
    let operacoes = document.getElementById("atual");
    operacoes.innerHTML += num;
}

function apagar() {
    let result = document.getElementById("atual").innerHTML;
    document.getElementById('atual').innerHTML = result.substring(0, result.length -1)
}

function limpa() {
    let result = document.getElementById("atual").innerHTML;
    document.getElementById('atual').innerHTML = result.substring(0, result.length - result.length);
    let resultP = document.getElementById("previous").innerHTML;
    document.getElementById('previous').innerHTML = result.substring(0, result.length - result.length);
}

function calcular() {
    
}



