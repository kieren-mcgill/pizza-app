import { bases } from "./bases";
import { Box, Button, Card, Container, Grid, IconButton, List, ListItem, styled, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import OurSnackbar from "./OurSnackbar";
import React, { useState } from "react";
import { getBasketPrice, getPizzaPrice } from "./prices";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)({
  backgroundColor: '#dce1eb',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  padding: '16px',
});

const Basket = ({ pizzaArray, setPizzaArray}) => {

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
              <IconButton onClick={() => deleteFromBasket(pizza)}>
                <DeleteForeverIcon/>
              </IconButton>
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

      <Box textAlign='center' sx={{ m: 2}}>
        <Link style={{pointerEvents : pizzaArray.length === 0 ? "none" : ""}} to="/order-form">
          <Button size="large" variant="contained" disabled = {pizzaArray.length === 0} >Order Now!</Button>
        </Link>
      </Box>
      <OurSnackbar severity="warning" message="Pizza Deleted From Basket" open={open} setOpen={setOpen}/>
    </Container>
  );
};

export default Basket;