import { bases } from "./bases";
import {Card, Container, List, ListItem, styled, Typography } from "@mui/material";

const StyledCard = styled(Card)({
  backgroundColor: '#dce1eb',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  padding: '16px',
});

const Basket = ({ basket }) => {
  return (
    <Container >
      <Typography variant="h3">Basket</Typography>
      <StyledCard>
        {basket.length === 0 && (
          <Typography>You haven't added anything yet. Get ordering!</Typography>
        )}
        <List>
          {basket.map((pizza, i) => (
            <ListItem key={i}>
              <Typography>{bases[pizza.base].label}</Typography>
            </ListItem>
          ))}
        </List>
      </StyledCard>
    </Container>
  );
};

export default Basket;