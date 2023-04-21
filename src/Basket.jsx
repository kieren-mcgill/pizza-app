import { bases } from "./bases";
import { Card, Container, IconButton, List, ListItem, styled, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import OurSnackbar from "./OurSnackbar";
import React, { useState } from "react";
import PreviousOrderSummary from "./PreviousOrderSummary";

const StyledCard = styled(Card)({
  backgroundColor: '#dce1eb',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  padding: '16px',
});

const Basket = ({ readOnly, pizzaArray, setPizzaArray}) => {

  const deleteFromBasket = (pizza) => {
    const modifiedBasket = pizzaArray.filter((p) => p.id !== pizza.id)
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
              <Typography flexGrow={1}>{bases[pizza.base].label}</Typography>
              {!readOnly && (
                <IconButton onClick={() => deleteFromBasket(pizza)}>
                  <DeleteForeverIcon/>
                </IconButton>
              )}
            </ListItem>
            ))}
        </List>
      </StyledCard>
      <OurSnackbar severity="warning" message="Pizza Deleted From Basket" open={open} setOpen={setOpen}/>
    </Container>
  );
};

export default Basket;