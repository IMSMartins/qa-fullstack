// Exercício 5 - Consumir URL inválida com try/catch

async function acessarApiInvalida() {
  try {
    const response = await fetch("https://url-invalida-123456.com/api");
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error("⚠️ Erro ao acessar API inválida:", error.message);
  }
}

acessarApiInvalida();
