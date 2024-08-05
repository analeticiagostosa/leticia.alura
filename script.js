const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado: "O Aumento do desemprego devido à substituição de trabalhadores por máquinas já é evidente. O que você pensa sobre isso?",
alternativas: [
"Futuramente irá faltar emprego",
"Vai melhorar a eficiência e a prudutividade no ambiente de trabalho"
]
},
{
enunciado: "Quais as preocupaçôes éticas relacionadas ao uso da Inteligência Artificial?",
alternativas: [
"Questionamentos morais, devido a desigualdade social",
"Falta de transparência nas decisões tomadas por algoritimos de IA"
]
},
{
enunciado: "Como a inteligência Artificial está impactando o mercado de trabalho? ",
alternativas: [
"Redução de riscos e custos, aumento da produtividade e  mais oportunidades de negócios",
"Automoção de tarefas repetitivas e aumento da demanda por habilidades relacionadas à IA, como programação e análise de dados"
]
}
]


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();