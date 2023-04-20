import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Grid, IconButton } from "@mui/material";
import { toppings } from "./toppings";

const ToppingAdder = ({ topping, amount, increaseNumber, decreaseNumber }) => {
  return (
      <Grid direction='row' container pt={2} spacing={{ xs: 2, md: 3 }} alignItems="center">
        <Grid item flexGrow={1}>
          {toppings[topping].label}
        </Grid>
        <Grid item>
          <IconButton onClick={() => decreaseNumber(topping)}>
            <RemoveCircleOutlineIcon/>
          </IconButton>
        </Grid>
        <Grid item>
          {amount}
        </Grid>
        <Grid item>
          <IconButton onClick={() => increaseNumber(topping)}>
            <AddCircleOutlineIcon/>
          </IconButton>
        </Grid>
      </Grid>
  )
}
export default ToppingAdder