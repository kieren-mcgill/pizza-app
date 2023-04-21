import { Grid, Link } from "@mui/material";
import {useNavigate} from "react-router-dom";

const PreOrderCard= ({order}) => {

  const navigate = useNavigate()
  const orderDate = new Date(order.timestamp)

  return(
    <>
      <Grid>
        <Grid item onClick={()=> navigate(`/previous-order-summary/${order.id}`)} >
          {orderDate}{order.basket.length}{order.address.postcode}
        </Grid>
      </Grid>
    </>
  )
}

export default PreOrderCard