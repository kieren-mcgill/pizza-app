import { bases } from "./bases";
import { Box, Button, Card, Container, Grid, IconButton, List, ListItem, styled, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import OurSnackbar from "./OurSnackbar";
import React, { useState } from "react";
import { getBasketPrice, getPizzaPrice } from "./prices";
import { useNavigate } from "react-router-dom";


const StyledCard = styled(Card)({
  backgroundColor: '#dce1eb',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  padding: '16px',
});

const Basket = ({ order, readOnly, orderForm, pizzaArray, setPizzaArray }) => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const deleteFromBasket = (pizza) => {
    const modifiedBasket = pizzaArray.filter((p) => p.id !== pizza.id)
    setPizzaArray(modifiedBasket)
    handleOpen()
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const goToPizza = (pizza) => {
    navigate(`/previous-order-summary/${order.id}/${pizza.id}`)
  }

  return (
    <Container>
      <Typography variant="h4">Basket</Typography>
      <StyledCard>
        {pizzaArray.length === 0 && (
          <Typography>You haven't added anything yet. Get ordering!</Typography>
        )}
        <List>
          {pizzaArray.map((pizza, i) => (
            <ListItem button={readOnly} onClick={readOnly ? () => goToPizza(pizza) : undefined} key={i}>
              <Grid item flexGrow={1}>
                <Typography>{`${(bases[pizza.base].label)}`}</Typography>
              </Grid>
              <Grid item flexend={1}>
                <Typography>{`£ ${(getPizzaPrice(pizza) / 100).toFixed(2)}`}</Typography>
              </Grid>
              {!readOnly && (
                <IconButton onClick={() => deleteFromBasket(pizza)}>
                  <DeleteForeverIcon/>
                </IconButton>)}
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

      {(!orderForm && (!readOnly && pizzaArray.length > 0)) && (
        <Box textAlign='center' sx={{ m: 2 }}>
          <Button onClick={() => navigate('/order-form')} size="large" variant="contained">Order Now!</Button>
        </Box>)}
      <OurSnackbar severity="warning" message="Pizza Deleted From Basket" open={open} setOpen={setOpen}/>
    </Container>
  );
};

export default Basket;
