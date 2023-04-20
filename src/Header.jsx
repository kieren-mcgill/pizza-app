import { Button, Grid, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import {ShoppingCart} from "@mui/icons-material";

const Header = ({pizzaArray}) => {

  return (

    <Grid container>
      <Grid>
        <Link to="/" ><Button>Pizza Shop</Button> </Link>
      </Grid>
      <Grid>
        <Link to="/basket"><Button>Basket</Button> </Link>
      </Grid>

        <Badge badgeContent={pizzaArray.length} color="primary"><ShoppingCart /></Badge>

    </Grid>

  )
};

export default Header