import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";


const Header = () => {

  return (

    <Grid container>
      <Grid>
        <Link to="/" ><Button>Pizza Shop</Button> </Link>
      </Grid>
      <Grid>
        <Link to="/basket"><Button>Basket</Button> </Link>
      </Grid>
    </Grid>

  )
};

export default Header