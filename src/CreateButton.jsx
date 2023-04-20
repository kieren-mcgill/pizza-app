import { Button, Grid} from "@mui/material";
import { Link } from "react-router-dom";

const CreateButton = () => {

  return (
    <Grid>
      <Grid item>
        <Link to="/pizza-form"><Button>Create Pizza</Button></Link>
      </Grid>
    </Grid>
  )
}

export default CreateButton