import { Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { baseKeys, bases } from "./bases";
import React, { useState } from "react";
import ToppingAdder from "./ToppingAdder";
import { toppingKeys } from "./toppings";

const PizzaForm = ({ addPizza }) => {

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

  const handleChange = (e) => {
    setPizza({
      ...pizza,
      base: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPizza(pizza);
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
    <Container>
      <h1>Create your pizza</h1>
      <FormControl>
        <InputLabel id="base">Select your base</InputLabel>
        <Select id="base" label="Select your base" onChange={handleChange} value={pizza.base}>
          {baseKeys.map((base, i) => <MenuItem key={i} value={base}>{bases[base].label}</MenuItem>)}
        </Select>
        <Typography pt={2}>You can have as many toppings as you think will fit on your pizza! You can add up to two of each topping.</Typography>
        <div>
          {toppingKeys.map((topping, i) => <ToppingAdder key={i} topping={topping}
                                                         increaseNumber={increaseNumber} decreaseNumber={decreaseNumber}
                                                         amount={pizza.toppings[topping]}/>)}
        </div>
        <Button onClick={handleSubmit}>Add Your Pizza</Button>
      </FormControl>
    </Container>
  )
}

export default PizzaForm;