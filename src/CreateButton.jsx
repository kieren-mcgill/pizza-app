import { Button, Grid} from "@mui/material";
import { Link } from "react-router-dom";

const CreateButton = () => {

  return (
    <Grid container justifyContent='center' alignItems='center' sx={{height: '500px' }}>
      <Grid item>
        <Link to="/pizza-form"><Button variant='outlined'
                                       style={{ borderRadius: "50%", padding: "10px 20px",
                                         backgroundColor: "#FFA700", color: "white",
                                         fontSize: "1.2rem", fontWeight: "bold",
                                         boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
        }}>Create Pizza</Button></Link>
      </Grid>
    </Grid>
  )
}

export default CreateButton