
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
cost perguntas = [
{
    enunciado:
    "Oque voce acha sobre o chat GBT?"
    alternativas:
    "bom", "ruim"

    enunciado:
"voce acha que ela vai mudar o mundo?"
alternativas:{
    "muito provavel",
    "tenho certeza que não"

    enunciado: {
        "O chatGBT pode acabar com o mundo?"
        alternativas
        "sim" ,"não"
    
        nunciado: {
        "O mundo esta melhor com a IA?"
        alternativas
        "sim" ,"não"

        nunciado: {
        "O chatGBT e um site que ira acabar com as escolas?"
        alternativas
        "sim" "não
    },
},

let atual = 0;
let perguntaAtual;

       ] 
    };
};.
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent =perguntaAtual.enunciado;
    mostraAlternativa();

}

function mostraAlternativa(){
    for (const alternativa of perguntas.alternativas) {
        cost botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();



