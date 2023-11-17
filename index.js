const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Nome e a quantidade de experiência (XP) do herói
let nome, xp;

rl.question('Digite o nome do seu herói: ', (answerNome) => {
  nome = answerNome;

  rl.question('Digite a quantidade de xp: ', (answerXP) => {
    xp = parseInt(answerXP);

    // Estrutura de decisão para determinar o nível do herói
    let nivel;

    if (xp < 1000) {
      nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      nivel = "Prata";
    } else if (xp >= 6001 && xp <= 7000) {
      nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }

    // Mensagem com o nome e o nível do herói
    console.log("O Herói de nome " + nome + " está no nível de " + nivel);

    // Fecha a interface de leitura
    rl.close();
  });
});










  
