import { filtrarPares } from "../exercicios/exercicio5.js";

test("Deve filtrar números pares", () => {
  expect(filtrarPares([1, 2, 3, 4])).toEqual([2, 4]);
});
