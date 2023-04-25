import PreOrderCard from "./PreOrderCard.jsx"
import { useEffect, useState, } from "react";
import { Container, Grid, Typography } from "@mui/material";

import { sortBy } from 'lodash';
import { getOrdersApi } from "./firebase-client";

const PreviousOrders = () => {

  const [previousOrders, updatedPreviousOrders] = useState([]);


  useEffect(() => {
    getOrdersApi().then(updatedPreviousOrders);
  }, []);

  const sortedPreviousOrders = sortBy(previousOrders, ['timestamp']).reverse();

  return (
    <Container>
      <Typography>
        Previous Orders
      </Typography>
      <Grid direction="column" container>
        {sortedPreviousOrders.map((order) => (
          <PreOrderCard
            key={order.id}
            order={order}/>
        ))}
      </Grid>
    </Container>
  )
};

export default PreviousOrders