import { adder } from "./adder";

describe('adder', () => {
  test('it adds numbers', () => {
    const result = adder(2, 2);
    expect(result).toEqual(4)
  })
})