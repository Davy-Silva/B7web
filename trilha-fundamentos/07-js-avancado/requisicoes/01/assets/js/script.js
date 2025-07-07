// O que é Sincrono e Assincrono?

// Síncrono -> As operações são executadas em sequência, uma após a outra.
console.log("Início");
console.log("Processando...");
console.log("Fim");
// Saída:
// Início
// Processando...
// Fim

// Assíncrono -> As operações podem ser executadas fora de ordem, sem bloquear o fluxo principal do programa.
console.log("Início");

setTimeout(() => {
  console.log("Processando...");
}, 2000); // Executa após 2 segundos

console.log("Fim");
// Saída:
// Início
// Fim
// Processando... (após 2 segundos)
