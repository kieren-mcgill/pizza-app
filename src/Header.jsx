import { Button, Grid, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import {ShoppingCart} from "@mui/icons-material";

const Header = () => {
  const ShoppingValue = 5

  return (

    <Grid container>
      <Grid>
        <Link to="/" ><Button>Pizza Shop</Button> </Link>
      </Grid>
      <Grid>
        <Link to="/basket"><Button>Basket</Button> </Link>
      </Grid>

        <Badge badgeContent={ShoppingValue} color="primary"><ShoppingCart /></Badge>

    </Grid>

  )
};

export default Header