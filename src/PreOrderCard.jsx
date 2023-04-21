import { Grid } from "@mui/material";
import {useNavigate} from "react-router-dom";

const PreOrderCard= ({order}) => {

  const navigate = useNavigate()
  const orderDate = (new Date(order.timestamp)).toString()
  const orderBasket = (order.basket ? (order.basket).length : "Empty Basket")

  return(
    <>
      <Grid>
        <Grid item onClick={()=> navigate(`/previous-order-summary/${order.id}`)}>
          <p>{orderDate} {orderBasket}</p>
        </Grid>
      </Grid>
    </>
  )
}

export default PreOrderCard