let nomeTimeA = prompt("Digite o nome do time A");
let nomeTimeB = prompt("Digite o nome do time B");
let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;

//elementos HTML
const nomeA_HTML = document.getElementById("nomeTimeA");
const nomeB_HTML = document.getElementById("nomeTimeB");
const PontoA_HTML = document.getElementById("pontuacaoA");
const PontoB_HTML = document.getElementById("pontuacaoB");
const SetA_HTML = document.getElementById("setA");
const SetB_html = document.getElementById("setB");

nomeA_HTML.innerText = nomeTimeA
nomeB_HTML.innerText = nomeTimeB

PontoA_HTML.innerText = pontoA
PontoB_HTML.innerText = pontoB

function ComputarPontoA() {
    pontoA = pontoA + 1;
    PontoA_HTML.innerText = pontoA;
    VerificarFimDoSet();
}

PontoA_HTML.addEventListener('click', ComputarPontoA)

function ComputarPontoB() {
    pontoB = pontoB + 1;
    PontoB_HTML.innerText = pontoB
    VerificarFimDoSet();
}

function ZerarPlacar(){
    pontoA = 0;
    pontoB = 0;
    PontoA_HTML.innerText = 0;
    PontoB_HTML.innerText = 0;
}

PontoB_HTML.addEventListener('click', ComputarPontoB)

function VerificarFimDoSet() {
    if (pontoA >= 25 && pontoA - pontoB >= 2) {
        alert(`O time ${nomeA_HTML.innerText = nomeTimeA} ganhou o set `);
        setA++;
        SetA_HTML.innerText = setA;
        PontoA_HTML.innerText = 0;
        pontoA = 0;
        ZerarPlacar();
    } else if (pontoB >= 25 && pontoB - pontoA >= 2) {
        alert(`O time ${nomeB_HTML.innerText = nomeTimeB} ganhou o set `)
        setB++;
        SetB_html.innerText = setB;
        PontoB_HTML.innerText = 0;
        pontoB = 0;
        ZerarPlacar();
    }
}