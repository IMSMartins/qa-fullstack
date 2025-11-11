import { contarElementos } from "../exercicios/exercicio4.js";

test("Deve contar elementos de um array", () => {
  expect(contarElementos([1, 2, 3])).toBe(3);
  expect(contarElementos([])).toBe(0);
});
