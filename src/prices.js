import { toppings } from "./toppings";
import { bases } from "./bases";

export const calculateToppingsPrice = (currentPizzaToppings) => {
  let price = 0;
  Object.keys(currentPizzaToppings).forEach((key) => {
    const toppingCount = currentPizzaToppings[key];
    price += toppingCount * toppings[key].price;
  });
  return price;
};

export const getPizzaPrice = (pizza) => {
  const basePrice = bases[pizza.base].price;
  const toppingsPrice = calculateToppingsPrice(pizza.toppings);
  return (basePrice + toppingsPrice);
}

export const getBasketPrice = (basket) => {
  const prices = basket.map(getPizzaPrice);
  return prices.reduce((prev, curr) => prev + curr, 0)
}