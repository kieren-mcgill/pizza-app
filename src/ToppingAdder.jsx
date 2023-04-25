import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Grid, IconButton } from "@mui/material";
import { toppings } from "./toppings";

const ToppingAdder = ({ readOnly, topping, amount, increaseNumber, decreaseNumber }) => {

  if (!readOnly || (readOnly && amount > 0)) {
    return (
      <Grid direction='row' container pt={2} spacing={{ xs: 2, md: 3 }} alignItems="center">
        <Grid item flexGrow={1}>
          {toppings[topping].label}
        </Grid>
        <Grid item flexend={1}>
          £ {(toppings[topping].price / 100).toFixed(2)}
        </Grid>
        {!readOnly && (
          <Grid item>
            <IconButton
              style={{ color: "white" }}
              onClick={() => decreaseNumber(topping)}
              disabled={amount > 0 ? false : true}
            >
              <RemoveCircleOutlineIcon/>
            </IconButton>
          </Grid>
        )}
        <Grid item>
          {amount}
        </Grid>
        {!readOnly && (
          <Grid item>
            <IconButton
              style={{ color: "white" }}
              onClick={() => increaseNumber(topping)}
              disabled={amount < 2 ? false : true}
            >
              <AddCircleOutlineIcon/>
            </IconButton>
          </Grid>
        )}
      </Grid>
    )
  }
}
export default ToppingAdder