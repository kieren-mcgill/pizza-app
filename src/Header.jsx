import { Button, Grid, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingCart, ReceiptLong } from "@mui/icons-material";
import { css } from "@emotion/css";

const Header = ({ pizzaArray }) => {

  const buttonCss = css`
    .MuiSvgIcon-root {
      color: black;
    }
  `

  return (

    <Grid container alignItems='center'>
      <Grid item flexGrow={1}>
        <Link to="/" >
          <Button>Pizza Shop</Button>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/previous-orders" className={buttonCss}><ReceiptLong/></Link>
      </Grid>
      <Grid item px={2}>
        <Link to="/basket" className={buttonCss}>
          <Badge badgeContent={pizzaArray.length} color="warning">
            <ShoppingCart />
          </Badge>
        </Link>
      </Grid>
    </Grid>
  )
};

export default Header
