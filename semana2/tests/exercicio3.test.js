import { maior } from "../exercicios/exercicio3.js";

test("Deve retornar o maior número", () => {
  expect(maior(10, 5)).toBe(10);
  expect(maior(3, 9)).toBe(9);
});
