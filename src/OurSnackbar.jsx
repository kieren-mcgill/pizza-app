import { Alert, Snackbar } from "@mui/material";


const OurSnackbar = ({ open, setOpen, message, severity}) => {


  const handleClose = () => {
    setOpen(false);
  }


    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    )
  }

export default OurSnackbar;