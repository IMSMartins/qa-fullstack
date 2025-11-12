const nomes = ["Igor", "Maria", "João", "Ana", "Carla"];

function listarNomes() {
  return nomes.map((nome, index) => `${index + 1} - ${nome}`);
}

module.exports = listarNomes;
