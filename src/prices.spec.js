import { calculateToppingsPrice, getBasketPrice, getPizzaPrice } from "./prices";

describe('calculateToppingsPrice', () => {
  test('it correctly calculates the topping price given some toppings', () => {
    //   stilton feta mushrooms
    const toppings = {
      stilton: 1,
      feta: 0,
      mushrooms: 2,
    }
    const result = calculateToppingsPrice(toppings);
    expect(result).toEqual(400);
  });
  test('it correctly calculates the topping price given no toppings', () => {
    //   stilton feta mushrooms
    const toppings = {
      stilton: 0,
      feta: 0,
      mushrooms: 0,
    }
    const result = calculateToppingsPrice(toppings);
    expect(result).toEqual(0);
  });
  test('it correctly calculates the topping price given an empty object', () => {
    //   stilton feta mushrooms
    const toppings = {}
    const result = calculateToppingsPrice(toppings);
    expect(result).toEqual(0);
  });
});

describe('getPizzaPrice', () => {
  test('it correctly calculates the topping price given some toppings and a base', () => {
    const pizza = {
      base: 'largeDeepPan',
      toppings: {
        stilton: 1,
        feta: 0,
        mushrooms: 2,
      }
    }
    const result = getPizzaPrice(pizza);
    expect(result).toEqual(900)
  })
  test('it correctly calculates the topping price given no toppings and a base', () => {
    const pizza = {
      base: 'largeDeepPan',
      toppings: {
        stilton: 0,
        feta: 0,
        mushrooms: 0,
      }
    }
    const result = getPizzaPrice(pizza);
    expect(result).toEqual(500)
  })
})

describe('getBasketPrice', () => {
  test('calculates the correct price for a basket of pizzas ', () => {
    const pizza1 = {
      base: 'largeDeepPan',
      toppings: {
        stilton: 1,
        feta: 0,
        mushrooms: 2,
      }
    }
    const pizza2 = {
      base: 'largeThin',
      toppings: {
        stilton: 1,
        feta: 0,
        mushrooms: 2,
      }
    }

    const result = getBasketPrice([pizza1, pizza2])
    expect(result).toEqual(1850)
  })
  test('calculates the correct price for an empty basket', () => {

    const result = getBasketPrice([])
    expect(result).toEqual(0)
  })
})