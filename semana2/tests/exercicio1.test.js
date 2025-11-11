import { somar } from "../exercicios/exercicio1.js";

describe("Exercício 1", () => {
  test("deve somar dois números corretamente", () => {
    expect(somar(2, 3)).toBe(5);
  });

  test("deve funcionar com números negativos", () => {
    expect(somar(-1, -5)).toBe(-6);
  });
});
