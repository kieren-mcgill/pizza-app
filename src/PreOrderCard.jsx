import { Grid } from "@mui/material";
import {useNavigate} from "react-router-dom";

const PreOrderCard= ({order}) => {

  const navigate = useNavigate()
  const orderDate = new Date(order.timestamp)

  return(
    <>
      <Grid>
        <Grid item onClick={()=> navigate(`/previous-order-summary/${order.id}`)}>
          <p>Click Me</p>
        </Grid>
      </Grid>
    </>
  )
}

export default PreOrderCard