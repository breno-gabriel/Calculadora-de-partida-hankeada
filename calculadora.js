// Função para calcular o saldo de rankeadas e o nível do jogador
function calcularRankeadas(vitorias, derrotas) {
    // Variável para armazenar o saldo de vitórias (vitórias - derrotas)
    let saldoVitorias = vitorias - derrotas;
    
    // Variável para armazenar o nível
    let nivel = "";
  
    // Estrutura de decisão para definir o nível com base nas vitórias
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
  
    // Retorna o saldo e o nível
    return { saldoVitorias, nivel };
  }
  
  // Exemplo de uso da função
  let vitorias = 85; // Exemplo de vitórias
  let derrotas = 20; // Exemplo de derrotas
  
  // Chama a função e armazena o resultado
  let resultado = calcularRankeadas(vitorias, derrotas);
  
  // Saída final
  console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
  