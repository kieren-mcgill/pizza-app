import { Button, Grid, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingCart, ReceiptLong } from "@mui/icons-material";

const Header = ({ pizzaArray }) => {

  return (

    <Grid container alignItems='center'>
      <Grid item flexGrow={1}>
        <Link to="/">
          <Button >Pizza Shop</Button>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/previous-orders"><ReceiptLong/></Link>
      </Grid>
      <Grid item px={2}>
        <Link to="/basket">
          <Badge badgeContent={pizzaArray.length} color="primary">
            <ShoppingCart/>
          </Badge>
        </Link>
      </Grid>
    </Grid>
  )
};

export default Header
