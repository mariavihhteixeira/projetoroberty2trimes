const botoes=document.querySelectAll (".botao");

for(let i=0; i<botoes.length; i++){
botoes[i].onclick=function(){
for (let j=0;j<botoes.length;j++){
botoes[j].classList.remove("ativo");
}
botoes[i].classList.add("ativo");
};



}

const botoes = document.querySelectorAll(".botoes");
const textos = document.query.SelectorAll(".aba-conteudo");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){

for (let j = 0; j< botoes.length; j++){
    botoes [j].classLIst.remove("ativo");
    textos[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    textos[i].class.List.add("ativo");
    }
}

const contadores = document.query.SelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-12-05T00:00:00");
const tempoObjetivo3 = new Date("2024-10-30T00:00:00");
const tempoObjetivo4 = new Date("2025-02-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2,tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

segundos %=60;
minutos%=60;
horas%=24;
if(tempoFinal > 0){
    return [dias,horas,minutos,segundos];
} else {
    return [0,0,0,0];
    }
}
function atualizaCronometro(){
  for(let i=0; i<contadores.lenght;i++){
    document.getElementByld("dias"+i).textContent=calculaTempo(tempos[i])[0];
    document.getElementsByld("horas"+i).textContent=calculaTempo(tempos[i])[1];
document.getElementsByld("min"+i).textContent=calculaTempo(tempos[i])[2];
    document.getElementsByld("seg"+i).textContent=calculaTempo(tempos[i])[3];
  }
}
function comecaCronometro(){
  atualizaCronometro();
  sentInterval(atualizaCronometro,1000);
}
comecaCronometro();
