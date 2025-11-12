const soma = require("../exercicios/exercicio1");

test("soma 5 + 7 = 12", () => {
  expect(soma(5, 7)).toBe(12);
});

test("soma números negativos", () => {
  expect(soma(-3, -4)).toBe(-7);
});
