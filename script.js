const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Corrigido: "cost" -> "const" e estrutura do array/objetos
const perguntas = [
  {
    enunciado: "O que você acha sobre o ChatGPT?",
    alternativas: ["Bom", "Ruim"]
  },
  {
    enunciado: "Você acha que ela vai mudar o mundo?",
    alternativas: ["Muito provável", "Tenho certeza que não"]
  },
  {
    enunciado: "O ChatGPT pode acabar com o mundo?",
    alternativas: ["Sim", "Não"]
  },
  {
    enunciado: "O mundo está melhor com a IA?",
    alternativas: ["Sim", "Não"]
  },
  {
    enunciado: "O ChatGPT é um site que irá acabar com as escolas?",
    alternativas: ["Sim", "Não"]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Exibe a pergunta atual
function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = ""; // limpa botões anteriores

  mostraAlternativas();
}

// Cria botões de alternativas dinamicamente
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa;
    botaoAlternativa.classList.add("botao-alternativa");

    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));

    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

// Trata a resposta do usuário
function respostaSelecionada(opcaoSelecionada) {
  historiaFinal += `Você respondeu: "${opcaoSelecionada}". `;
  atual++;
  mostraPergunta();
}

// Mostra o resultado final
function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.innerHTML = "";
}

// Inicia o quiz
mostraPergunta();





