// Exercicio 4 - Objeto com dados de usuario

const usuario = {
  nome: "Igor Martins",
  idade: 29,
  email: "igor@example.com",
};

for (const chave in usuario) {
  console.log(`${chave}: ${usuario[chave]}`);
}
