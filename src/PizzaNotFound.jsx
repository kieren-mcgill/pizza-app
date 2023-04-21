import pizzaBox from "./pizzabox.jpeg"
import { Grid, Typography } from "@mui/material";


const PizzaNotFound = () => {

  return (
    <Grid item>
      <Typography
        style={{
          height:"80vh",
          background:"no-repeat center",
          backgroundSize:"contain",
          backgroundImage: `url(${pizzaBox})`
      }}>
        No Pizza Here
      </Typography>
    </Grid>
  )
}

export default PizzaNotFound