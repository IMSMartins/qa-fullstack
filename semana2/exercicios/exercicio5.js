async function acessarApiInvalida() {
  try {
    const response = await fetch("https://url-invalida-123456.com/api");
    const data = await response.json();
    return data;
  } catch (error) {
    return `Erro: ${error.message}`;
  }
}

module.exports = acessarApiInvalida;
