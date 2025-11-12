const listarUsuario = require("../exercicios/exercicio4");

test("lista propriedades do usuário", () => {
  const resultado = listarUsuario();
  expect(resultado).toContain("nome: Igor Martins");
  expect(resultado).toContain("idade: 29");
  expect(resultado).toContain("email: igor@example.com");
});
