import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeDate } from "./makeDate";
import { getBasketPrice } from "./prices";
import { css } from "@emotion/css";

const PreOrderCard = ({ order }) => {

  const navigate = useNavigate()
  const orderDate = makeDate(order.timestamp)
  const orderBasket = (order.basket ?
    (order.basket.length > 1 ? `${(order.basket).length} pizzas` : `${(order.basket).length} pizza`)
    : "Empty Basket")

  const itemCss = css`
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px;
    margin-top: 5px;
    :hover {
      background-color: whitesmoke;
      cursor: pointer;
    }
  `

  return (
    <>
      <Grid className={itemCss} item onClick={() => navigate(`/previous-order-summary/${order.id}`)}>
        <Typography>{orderDate} - {orderBasket} - £{((getBasketPrice(order.basket)) / 100).toFixed(2)} </Typography>
      </Grid>
    </>
  )
}

export default PreOrderCard