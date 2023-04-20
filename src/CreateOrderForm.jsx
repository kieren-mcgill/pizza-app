import { Grid, TextField } from "@mui/material";

const CreateOrderForm = () => {
  return (
    <form>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField label="Name" variant="outlined"/>
        </Grid>
        <Grid item>
          <TextField label="House Name/ Number" variant="outlined"/>
        </Grid>
        <Grid item>
          <TextField label="Street" variant="outlined"/>
        </Grid>
        <Grid item>
          <TextField label="City/Town" variant="outlined"/>
        </Grid>
        <Grid item>
          <TextField label="Post Code" variant="outlined"/>
        </Grid>
      </Grid>
    </form>

    

  )
}


export default CreateOrderForm;