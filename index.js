// // Nome e a quantidade de experiência (XP) do herói
// var nome = "Marcelo";
// var xp = 100000;

// // Estrutura de decisão para determinar o nível do herói
// var nivel;

// if (xp < 1000) {
//     nivel = "Ferro";
// } else if (xp >= 1001 && xp <= 2000) {
//     nivel = "Bronze";
// } else if (xp >= 2001 && xp <= 5000) {
//     nivel = "Prata";
// } else if (xp >= 6001 && xp <= 7000) {
//     nivel = "Ouro";
// } else if (xp >= 7001 && xp <= 8000) {
//     nivel = "Platina";
// } else if (xp >= 8001 && xp <= 9000) {
//     nivel = "Ascendente";
// } else if (xp >= 9001 && xp <= 10000) {
//     nivel = "Imortal";
// } else {
//     nivel = "Radiante";
// }

// // Mensagem com o nome e o nível do herói
// console.log("O Herói de nome " + nome + " está no nível de " + nivel);


let resultado = calcularNivel(75, 25);
console.log(resultado);

function calcularNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
      nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
  } else if (vitorias >= 101) {
      nivel = "Imortal";
  }

  return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}


