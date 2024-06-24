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