import pizzaBox from "./pizzabox.jpeg"
import { Box, Grid, } from "@mui/material";


const PizzaNotFound = () => {

  return (
    <Grid container justifyContent="center" >
      <Box component="img" src={pizzaBox} sx={{width: 700,}} />
    </Grid>
  )
}

export default PizzaNotFound