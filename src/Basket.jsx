import { bases } from "./bases";
import { Card, Container, Grid, IconButton, List, ListItem, styled, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import OurSnackbar from "./OurSnackbar";
import React, { useState } from "react";
import PreviousOrderSummary from "./PreviousOrderSummary";
import { getBasketPrice, getPizzaPrice } from "./prices";

const StyledCard = styled(Card)({
  backgroundColor: '#dce1eb',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  padding: '16px',
});

const Basket = ({ readOnly, pizzaArray, setPizzaArray}) => {

  const deleteFromBasket = (pizza) => {
    const modifiedBasket = pizzaArray.filter((p) =>  p.id !== pizza.id)
    setPizzaArray(modifiedBasket)
    handleOpen()
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <Container>
      <Typography variant="h3">Basket</Typography>
      <StyledCard>
        {pizzaArray.length === 0 && (
          <Typography>You haven't added anything yet. Get ordering!</Typography>
        )}
        <List>
          {pizzaArray.map((pizza, i) => (
            <ListItem key={i}>
              <Grid item flexGrow={1}>
                <Typography>{`${(bases[pizza.base].label)}`}</Typography>
              </Grid>
              <Grid item flexend={1}>
                <Typography>{`£ ${(getPizzaPrice(pizza) / 100).toFixed(2)}`}</Typography>
              </Grid>
              {!readOnly && (
                <IconButton onClick={() => deleteFromBasket(pizza)}>
                  <DeleteForeverIcon/>
                </IconButton>
              )}
            </ListItem>
            ))}
        </List>
        <Grid container>
          <Grid item flexGrow={1}>
            <Typography variant="h5">Total price:</Typography>
          </Grid>
          <Grid item>
            <Typography>£ {(getBasketPrice(pizzaArray) / 100).toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </StyledCard>
      <OurSnackbar severity="warning" message="Pizza Deleted From Basket" open={open} setOpen={setOpen}/>
    </Container>
  );
};

export default Basket;