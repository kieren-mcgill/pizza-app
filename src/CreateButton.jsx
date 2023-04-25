import { Button, Grid} from "@mui/material";
import { Link } from "react-router-dom";

const CreateButton = () => {

  return (
    <Grid container justifyContent='center' alignItems='center' sx={{height: '800px' }}>
      <Grid item>
        <Link to="/pizza-form"><Button variant='outlined'
                                       style={{
                                         borderRadius: "50%",
                                         padding: "150px 20px",
                                         backgroundColor: "#FFA700",
                                         color: "white",
                                         fontSize: "2rem",
                                         fontWeight: "bold",
                                         boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.3)"
        }}>Create Your Pizza</Button></Link>
      </Grid>
    </Grid>
  )
}

export default CreateButton