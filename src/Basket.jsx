import { bases } from "./bases";
import { Card, Container, Grid, List, ListItem, styled, Typography } from "@mui/material";
import { getBasketPrice, getPizzaPrice } from "./prices";

const StyledCard = styled(Card)({
  backgroundColor: '#dce1eb',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  padding: '16px',
});

const Basket = ({ basket }) => {
  return (
    <Container>
      <Typography variant="h3">Basket</Typography>
      <StyledCard>
        {basket.length === 0 && (
          <Typography>You haven't added anything yet. Get ordering!</Typography>
        )}
        <List>
          {basket.map((pizza, i) => (
            <ListItem key={i}>
              <Grid item flexGrow={1}>
                <Typography>{`${(bases[pizza.base].label)}`}</Typography>
              </Grid>
              <Grid item flexend={1}>
                <Typography>{`£ ${(getPizzaPrice(pizza) / 100).toFixed(2)}`}</Typography>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Grid container>
          <Grid item flexGrow={1}>
            <Typography variant="h5">Total price:</Typography>
          </Grid>
          <Grid item>
            <Typography>£ {(getBasketPrice(basket) / 100).toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </StyledCard>
    </Container>
  );
};

export default Basket;