import Basket from "./Basket";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { baseUrl } from "./firebase-client";
import axios from "axios";
import { makeDate } from "./makeDate";


const PreviousOrderSummary = () => {
  const { orderid } = useParams();
  const [order, setOrder] = useState(undefined);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${baseUrl}/orders/${orderid}.json`,
    }).then(({ data }) => {
      if (data) {
        setOrder(data)
      } else {
        setHasError(true);
      }
    })
  }, [])

  if (hasError) {
    return (
      <p>Error: Order not found</p>
    )
  }

  if (!order) {
    return (
      <p>Fetching Order</p>
    )
  }

  return (
    <>
      <Grid direction="column" p={3} container>
        <Grid item>
          <Typography variant="h4">Order Details</Typography>
        </Grid>
        <Grid item>
          <Typography>{order.address.name}</Typography>
        </Grid>
        <Grid item>
          <Typography>{order.address.line1}</Typography>
        </Grid>
        <Grid item>
          <Typography>{order.address.road}</Typography>
        </Grid>
        <Grid item>
          <Typography>{order.address.town}</Typography>
        </Grid>
        <Grid item>
          <Typography>{order.address.postcode}</Typography>
        </Grid>
        <Grid item>
          <Typography>{makeDate(order.timestamp)}</Typography>
        </Grid>
      </Grid>
      <Basket readOnly order={{ ...order, id: orderid }} pizzaArray={order.basket}/>
    </>
  )
}

export default PreviousOrderSummary;