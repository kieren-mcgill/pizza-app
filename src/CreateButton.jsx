import { Button, Grid, Link } from "@mui/material";


const CreateButton = () => {

  return (

    <Grid>
      <Grid item>
        <Link to="/create-pizza" ><Button>Create Pizza</Button></Link>
      </Grid>
    </Grid>
  )

}

export default CreateButton