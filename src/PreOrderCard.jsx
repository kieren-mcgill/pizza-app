import { Grid, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";
import { makeDate } from "./makeDate";
import { getBasketPrice } from "./prices";

const PreOrderCard= ({order}) => {

  const navigate = useNavigate()
  const orderDate = makeDate(order.timestamp)
  const orderBasket = (order.basket ?
    (order.basket.length > 1 ? `${(order.basket).length} pizzas`: `${(order.basket).length} pizza`)
    : "Empty Basket")

  return(
    <>
      <Grid>
        <Grid item onClick={()=> navigate(`/previous-order-summary/${order.id}`)}>
          <Typography>{orderDate} - {orderBasket} - {getBasketPrice(order.basket)}</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default PreOrderCard