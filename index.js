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





// let resultado = calcularNivel(75, 25);
// console.log(resultado);

// function calcularNivel(vitorias, derrotas) {
//   let saldoVitorias = vitorias - derrotas;
//   let nivel;

//   if (vitorias < 10) {
//       nivel = "Ferro";
//   } else if (vitorias >= 11 && vitorias <= 20) {
//       nivel = "Bronze";
//   } else if (vitorias >= 21 && vitorias <= 50) {
//       nivel = "Prata";
//   } else if (vitorias >= 51 && vitorias <= 80) {
//       nivel = "Ouro";
//   } else if (vitorias >= 81 && vitorias <= 90) {
//       nivel = "Diamante";
//   } else if (vitorias >= 91 && vitorias <= 100) {
//       nivel = "Lendário";
//   } else if (vitorias >= 101) {
//       nivel = "Imortal";
//   }

//   return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
// }



// class Hero {
//     constructor(nome, idade, tipo) {
//       this.nome = nome;
//       this.idade = idade;
//       this.tipo = tipo;
//     }
  
//     atacar() {
//       let ataque;
//       switch (this.tipo) {
//         case 'mago':
//           ataque = 'usou magia';
//           break;
//         case 'guerreiro':
//           ataque = 'usou espada';
//           break;
//         case 'monge':
//           ataque = 'usou artes marciais';
//           break;
//         case 'ninja':
//           ataque = 'usou shuriken';
//           break;
//         default:
//           ataque = 'usou um ataque desconhecido';
//       }
  
//       console.log(`o ${this.tipo} atacou usando ${ataque}`);
//     }
//   }
  
//   let heroi = new Hero('Gandalf', 100, 'mago');
//   heroi.atacar();
  
//   let heroi2 = new Hero('Aragorn', 35, 'guerreiro');
//   heroi2.atacar();
  
