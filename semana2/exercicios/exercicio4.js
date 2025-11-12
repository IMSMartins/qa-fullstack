const usuario = {
  nome: "Igor Martins",
  idade: 29,
  email: "igor@example.com",
};

function listarUsuario() {
  return Object.entries(usuario).map(([chave, valor]) => `${chave}: ${valor}`);
}

module.exports = listarUsuario;
