import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { baseKeys, bases } from "./bases";
import React, { useState } from "react";
import ToppingAdder from "./ToppingAdder";
import { toppingKeys } from "./toppings";
import { getPizzaPrice } from "./prices";



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
      base: e.target.value,
      toppings: pizza.toppings,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    addPizza(pizza);
    window.scrollTo(0, 0);
    setPizza({
      base: "largeDeepPan",
      toppings: getToppingsState()
    })
  }



  const increaseNumber = (topping) => {
    if (pizza.toppings[topping] < 2) {
      const updatedToppings = {
        ...pizza.toppings,
        [topping]: pizza.toppings[topping] + 1,
      };
      setPizza({
        ...pizza,
        toppings: updatedToppings,
      });
    }
  };

  const decreaseNumber = (topping) => {
    if (pizza.toppings[topping] > 0) {
      const updatedToppings = {
        ...pizza.toppings,
        [topping]: pizza.toppings[topping] - 1,
      };
      setPizza({
        ...pizza,
        toppings: updatedToppings,
      });
    }
  };

  const totalPrice = getPizzaPrice(pizza)

  return (
    <Container>
      <h1>Create your pizza </h1>
      <FormControl>
        <InputLabel id="base">Select your base</InputLabel>
        <Select id="base" label="Select your base" onChange={handleChange} value={pizza.base}>
          {baseKeys.map((base, i) => (
            <MenuItem key={i} value={base}>
                <Grid container>
                  <Grid item flexGrow={1}>
                    {bases[base].label}
                  </Grid>
                  <Grid item flexend={1}>
                    £ {(bases[base].price/100).toFixed(2)}
                  </Grid>
                </Grid>
            </MenuItem>
          ))}
        </Select>
        <Typography pt={2}>You can have as many toppings as you think will fit on your pizza! You can add up to two of
          each topping.</Typography>
        {toppingKeys.map((topping, i) => (
          <ToppingAdder
            key={i}
            topping={topping}
            increaseNumber={increaseNumber}
            decreaseNumber={decreaseNumber}
            amount={pizza.toppings[topping]}
          />
        ))}
        <Grid container>
          <Grid item flexGrow={1}>
            <Typography variant="h5">Total price:</Typography>
          </Grid>
          <Grid item>
        <Typography variant="h5">£ {((totalPrice)/100).toFixed(2)} </Typography>
          </Grid>
        </Grid>
        <Button onClick={handleSubmit}>Add Your Pizza</Button>
      </FormControl>
    </Container>
  )
}

export default PizzaForm;