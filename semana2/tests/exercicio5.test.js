const acessarApiInvalida = require("../exercicios/exercicio5");

beforeEach(() => {
  fetch.resetMocks();
});

test("captura erro de API inválida", async () => {
  fetch.mockReject(new Error("Falha na rede"));

  const resultado = await acessarApiInvalida();
  expect(resultado).toBe("Erro: Falha na rede");
});
