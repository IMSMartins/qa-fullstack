const getUser = require("../exercicios/exercicio2");

beforeEach(() => {
  fetch.resetMocks();
});

test("retorna dados do usuário", async () => {
  fetch.mockResponseOnce(JSON.stringify({
    data: {
      first_name: "Janet",
      last_name: "Weaver",
      email: "janet.weaver@reqres.in",
      avatar: "https://reqres.in/img/faces/2-image.jpg"
    }
  }));

  const user = await getUser();
  expect(user.nomeCompleto).toBe("Janet Weaver");
  expect(user.email).toBe("janet.weaver@reqres.in");
  expect(user.avatar).toBe("https://reqres.in/img/faces/2-image.jpg");
});
