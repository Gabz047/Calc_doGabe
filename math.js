let resultP = document.getElementById("previous").innerHTML; //variavel do historico
let contador = 0; //contador para impossibilitar que o usuário digite duas operações seguidas
let contadorP = 0; //contador para impossibilitar que o usuário digite mais de uma casa decimal para um número
let verificaI = []; //array para zerar o contadorP caso o usuário apague o ponto com a função apagar()


function add_num(num) {
    let valor1 = document.getElementById("atual");
    valor1.innerHTML += num;
    contador = 0;
} //função para adicionar número

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
} //função para adicionar operador

function add_ponto(num) {
    contadorP++;
    if (contadorP < 2) {
        document.getElementById("atual").innerHTML += num;
    }
} //função para adicionar casa decimal

function apagar() {
    let result = document.getElementById("atual").innerHTML;
    verificaI.push(result.substring(result.length - 1));
    document.getElementById('atual').innerHTML = result.substring(0, result.length -1);
    console.log(verificaI)
    for (i = 0; i < verificaI.length; i++) {
        if (verificaI[i] == '.') {
            contadorP = 0;
        }
        if (verificaI[i] == "*" || verificaI[i] == "/" || verificaI[i] == "+" || verificaI[i] == "-") {
            contador = 0;
        }
    }
} //função para apagar número por número

function limpa() {
    let result = document.getElementById("atual").innerHTML;
    document.getElementById('atual').innerHTML = result.substring(0, result.length - result.length);
    document.getElementById('previous').innerHTML = result.substring(0, result.length - result.length);
    contadorP = 0;
    contador = 0;
} //função para apagar tudo de uma vez

function calcular() {
   document.getElementById('previous').innerHTML = document.getElementById('atual').innerHTML + " ="
   let conta = eval(document.getElementById('atual').innerHTML);
   document.getElementById('atual').innerHTML = conta;
   let verificacao = [];
   verificacao.push(document.getElementById('atual').innerHTML);
   if (verificacao[0].includes(".")) {
    contadorP++;
   } else {
    contadorP = 0;
   }
} //função para realizar o cálculo

//************************************************************FUNCIONALIDADE DAS TECLAS DO TECLADO************************************************************//


//calcular

document.addEventListener('keypress', function(tecla) {
    if (tecla.key === "Enter") {
        let keyBoard = document.getElementById("igual");
        keyBoard.click();
    }
    let operadores = [{op: "adicao", s: "+"}, {op: "subtracao", s: "-"}, {op: "multiplicacao", s: "*"}, {op: "divisao", s: "/"}, {op: "virgula", s: "."}, {op: "apagar", s: "a"}, {op: "ac", s: "x"}];
    for (i = 0; i < operadores.length; i++) {
        if (tecla.key === operadores[i].s) {
            let keyBoard = document.getElementById(operadores[i].op);
            keyBoard.click();
        }
    }
    let numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    for (i = 0; i < numeros.length; i++) {
        if (tecla.key === numeros[i]) {
            let keyBoard = document.getElementById(numeros[i]);
            keyBoard.click();
        }
    }
});
