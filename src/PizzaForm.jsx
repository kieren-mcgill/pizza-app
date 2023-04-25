import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { baseKeys, bases } from "./bases";
import React, { useState } from "react";
import ToppingAdder from "./ToppingAdder";
import { toppingKeys } from "./toppings";
import { getPizzaPrice } from "./prices";


import  OurSnackbar  from "./OurSnackbar";
import { v4 as uuidv4 } from 'uuid';

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
    addPizza({ ...pizza, id: uuidv4() });
    window.scrollTo(0, 0);
    setPizza({
      base: "largeDeepPan",
      toppings: getToppingsState()
    })
    handleOpen();
  }

  const increaseNumber = (topping) => {
    if (pizza.toppings[topping] < 2) {
      setPizza({
        ...pizza,
        toppings: {
          ...pizza.toppings,
          [topping]: pizza.toppings[topping] + 1
        }
      })
    }
  };

  const decreaseNumber = (topping) => {
    if (pizza.toppings[topping] > 0) {
      setPizza({
        ...pizza,
        toppings: {
          ...pizza.toppings,
          [topping]: pizza.toppings[topping] - 1
        }
      })
    }
  };

  const totalPrice = getPizzaPrice(pizza)


  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <Container>
      <h1>Create your pizza</h1>
      <FormControl>
        <InputLabel id="base">Select your base</InputLabel>
        <Select id="base" label="Select your base" onChange={handleChange} value={pizza.base}>
          {baseKeys.map((base, i) => (
            <MenuItem class='customFont1' key={i} value={base}>
                <Grid className="customFont1"
                 pt={1} container>
                  <Grid pl={3} item flexGrow={1}>
                    {bases[base].label}
                  </Grid>
                  <Grid pr={3} item flexend={1}>
                    £ {(bases[base].price/100).toFixed(2)}
                  </Grid>
                </Grid>
            </MenuItem>
          ))}
        </Select>
        <Typography class='customFont1' pt={2}>You can have as many toppings as you think will fit on your pizza! You can add up to two of
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
            <Typography class='customFont1' variant="h5">Total price:</Typography>
          </Grid>
          <Grid item pr={18}>
        <Typography  variant="h5" class='customFont1'>£ {((totalPrice)/100).toFixed(2)} </Typography>
          </Grid>
        </Grid>
        <Button onClick={handleSubmit} class='customFont1'>Add Your Pizza</Button>
      </FormControl>
      <OurSnackbar severity="success" message="Pizza Added To Basket :)" open={open} setOpen={setOpen}/>
    </Container>
  )
}

export default PizzaForm;