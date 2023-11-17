const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do seu herói: ', (nome) => {
  rl.question('Digite a idade do seu herói: ', (idade) => {
    rl.question('Digite o tipo do seu herói: ', (tipo) => {
      let heroi = {
        nome: nome,
        idade: idade,
        tipo: tipo,
        atacar: function() {
          let ataque;
          switch (this.tipo) {
            case 'mago':
              ataque = 'magia';
              break;
            case 'guerreiro':
              ataque = 'espada';
              break;
            case 'monge':
              ataque = 'artes marciais';
              break;
            case 'ninja':
              ataque = 'shuriken';
              break;
            default:
              ataque = 'um ataque desconhecido';
          }

          console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
          rl.close();
        }
      };

      heroi.atacar();
    });
  });
});

