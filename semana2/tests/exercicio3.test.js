const listarNomes = require("../exercicios/exercicio3");

test("lista nomes com índice", () => {
  const resultado = listarNomes();
  expect(resultado[0]).toBe("1 - Igor");
  expect(resultado[1]).toBe("2 - Maria");
  expect(resultado.length).toBe(5);
});
