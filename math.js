let resultP = document.getElementById("previous").innerHTML;
let contador = 0;
let contadorP = 0;
let verificaI = [];


function add_num(num) {
    let valor1 = document.getElementById("atual");
    valor1.innerHTML += num;
    contador = 0;
}

function add_operador(num) {
    let operacoes = document.getElementById("atual").innerHTML;
    contador++;
    console.log(contador)
    document.getElementById("atual").innerHTML += num;
    if (contador > 1) {
        document.getElementById('atual').innerHTML = operacoes.substring(0, operacoes.length - 1);
        contador = 0;
    }
    contadorP = 0;
}

function add_ponto(num) {
    contadorP++;
    if (contadorP < 2) {
        document.getElementById("atual").innerHTML += num;
    }
}

function apagar() {
    let result = document.getElementById("atual").innerHTML;
    verificaI.push(result.substring(result.length - 1));
    document.getElementById('atual').innerHTML = result.substring(0, result.length -1);
    console.log(verificaI)
    for (i = 0; i < verificaI.length; i++) {
        if (verificaI[i] == '.') {
            contadorP = 0;
        }
    }
}

function limpa() {
    let result = document.getElementById("atual").innerHTML;
    document.getElementById('atual').innerHTML = result.substring(0, result.length - result.length);
    document.getElementById('previous').innerHTML = result.substring(0, result.length - result.length);
    contadorP = 0;
    contador = 0;
}

function calcular() {
   document.getElementById('previous').innerHTML = document.getElementById('atual').innerHTML + " ="
   let conta = eval(document.getElementById('atual').innerHTML);
   document.getElementById('atual').innerHTML = conta;
}



