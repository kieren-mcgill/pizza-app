import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { baseKeys, bases } from "./bases";
import React, { useState } from "react";
import ToppingAdder from "./ToppingAdder";
import { toppingKeys } from "./toppings";
import { getPizzaPrice } from "./prices";
import form from "./img/form.jpg"

import  OurSnackbar  from "./OurSnackbar";
import { v4 as uuidv4 } from 'uuid';
import { css } from "@emotion/css";

const backgroundClass = css`
  background-image: url(${form});
  background-size: cover;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  color: white;
`;

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
    <div className={backgroundClass}>
    <Container  >
      <h1 style={{margin:"0 0 15px 0"}}>Create your pizza</h1>
      <FormControl style={{backgroundColor: "#211e1f"}}>
        <InputLabel style={{color: "white"}} id="base">Select your base</InputLabel>
        <Select
          style={{
            backgroundColor: "white",
            color: "#211e1f",
            margin: "10px",
            border: "1px solid white"
        }}
          id="base"
          label="Select your base"
          onChange={handleChange}
          value={pizza.base}>
          {baseKeys.map((base, i) => (
            <MenuItem
              style={{
                backgroundColor: "white",
                color: "#211e1f"
            }}
              key={i}
              value={base}>
                <Grid container >
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
        <Grid container >
          <Grid item flexGrow={1}>
            <Typography padding="10px" margin="10px" variant="h5">Total price:</Typography>
          </Grid>
          <Grid item>
        <Typography padding="10px" margin="10px" variant="h5">£ {((totalPrice)/100).toFixed(2)} </Typography>
          </Grid>
        </Grid>
        <Button variant="contained"
                color="warning"
                sx={{height: '70px' }}
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                margin: "10px"}}
                onClick={handleSubmit}>Add Your Pizza</Button>
      </FormControl>
      <OurSnackbar severity="success" message="Pizza Added To Basket :)" open={open} setOpen={setOpen}/>
    </Container>
    </div>
  )
}

export default PizzaForm;