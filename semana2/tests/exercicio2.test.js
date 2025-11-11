import { getUser } from "../exercicios/exercicio2.js";

beforeEach(() => {
  fetch.resetMocks();
});

describe("Exercício 2 - API de usuário", () => {
  test("deve retornar os dados corretos do usuário", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: {
          id: 2,
          email: "janet.weaver@reqres.in",
          first_name: "Janet",
          last_name: "Weaver",
          avatar: "https://reqres.in/img/faces/2-image.jpg"
        }
      })
    );

    const user = await getUser();

    expect(user.first_name).toBe("Janet");
    expect(user.last_name).toBe("Weaver");
    expect(user.email).toBe("janet.weaver@reqres.in");
  });

  test("deve lançar erro quando a requisição falhar", async () => {
    fetch.mockRejectOnce(new Error("Erro na requisição"));

    await expect(getUser()).rejects.toThrow("Erro na requisição");
  });
});
