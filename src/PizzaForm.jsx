import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { baseKeys, bases } from "./bases";
import { useState } from "react";
import ToppingAdder from "./ToppingAdder";
import { toppingKeys } from "./toppings";

const PizzaForm = () => {

  const getToppingsState = () => {
    const initialToppings = {};
    toppingKeys.forEach((key) => {
      initialToppings[key] = 0;
    });
    return initialToppings;
  }

  const [pizza, setPizza] = useState(
    {
      base: "largeDeepPan",
      toppings: getToppingsState(),
    }
  )

  const [pizzaList, addToPizzaList] = useState([]);

  const handleChange = (e) => {
    setPizza({
      ...pizza,
      base: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addToPizzaList([...pizzaList, pizza])
    setPizza({
      base: "largeDeepPan",
      toppings: getToppingsState()
    })
  }

  const increaseNumber = (topping) => {
    if (pizza.toppings[topping] < 2 ){
    setPizza({
      ...pizza,
      toppings: {
        ...pizza.toppings,
        [topping]: pizza.toppings[topping] + 1
      }
    }) }
  }

  const decreaseNumber = (topping) => {
    if (pizza.toppings[topping] > 0 ){
      setPizza({
        ...pizza,
        toppings: {
          ...pizza.toppings,
          [topping]: pizza.toppings[topping] - 1
        }
      }) }
  }

  return (
    <>
      <FormControl>
        <InputLabel id="base">Select Base</InputLabel>
        <Select id="base" label="Select Base" onChange={handleChange} value={pizza.base}>
          {baseKeys.map((base, i) => <MenuItem key={i} value={base}>{bases[base].label}</MenuItem>)}
        </Select>
        <div>
          {toppingKeys.map((topping, i) => <ToppingAdder key={i} topping={topping}
                                                         increaseNumber={increaseNumber} decreaseNumber={decreaseNumber}
                                                         amount={pizza.toppings[topping]}/>)}
        </div>
        <Button onClick={handleSubmit}>Add Your Pizza</Button>
      </FormControl>
    </>
  )
}

export default PizzaForm;