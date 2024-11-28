let nome = "Felipão meu Salvador"; // Nome do herói
let xp = 1000; // Experiência inicial do herói
let nivel; // Variável para armazenar o nível do herói

// Laço para verificar o nível do herói baseado no XP
while (xp <= 11000) {
  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 6000) {
    nivel = "Ouro";
  } else if (xp >= 6001 && xp <= 7000) {
    nivel = "Platina";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Ascendente";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Imortal";
  } else if (xp >= 10001) {
    nivel = "Radiante";
  }

  // Exibe o nível atual do herói
  console.log("O Herói de nome " + nome + " está no nível de " + nivel);

  // Incrementa o XP para simular progresso
  xp += 2000; // Aumenta o XP a cada iteração
}
