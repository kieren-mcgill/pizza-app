import { Button, Grid} from "@mui/material";
import { Link } from "react-router-dom";

const CreateButton = () => {

  return (
    <Grid container justifyContent='center' alignItems='center' sx={{height: '500px' }}>
      <Grid item>
        <Link to="/pizza-form"><Button variant='outlined'>Create Pizza</Button></Link>
      </Grid>
    </Grid>
  )
}

export default CreateButton