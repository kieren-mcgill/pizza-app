import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { postOrderApi } from "./firebase-client";
import {
  isEmptyInput,
  hasSpecialCharacters,
  hasNumbers,
  invalidPostCode,
  checkHasErrors,
} from "./orderFormValidation"
import OurSnackbar from "./OurSnackbar";
import Basket from "./Basket";

const CreateOrderForm = ({ pizzaArray, setPizzaArray, setOrderSnackbar }) => {
  const navigate = useNavigate()

  if (pizzaArray.length === 0) {
    navigate('/');
  }

  const emptyOrder = {
    name: "",
    line1: "",
    road: "",
    town: "",
    postcode: "",
  }
  const initialError = {
    name: [],
    line1: [],
    road: [],
    town: [],
    postcode: [],
  }

  const [errorInput, setErrorInput] = useState(initialError)
  const [orderInput, setOrderInput] = useState(emptyOrder)

  const onChange = (event) => {
    setOrderInput({
      ...orderInput,
      [event.target.name]: event.target.value
    })
  }

  const validCheck = (fieldInput, key) => {
    const errorMessages = []
    errorMessages.push(isEmptyInput(fieldInput))
    errorMessages.push(hasSpecialCharacters(fieldInput))
    if (key === 'name' || key === 'road' || key === 'town') {
      errorMessages.push(hasNumbers(fieldInput))
    }
    if (key === 'postcode') {
      errorMessages.push(invalidPostCode(fieldInput))
    }
    return errorMessages.filter(el => el !== '')
  }


  const handleClick = () => {
    const newErrors = {}

    Object.keys(orderInput).forEach((key) => newErrors[key] = validCheck(orderInput[key], key))
    setErrorInput(newErrors)

    if (!checkHasErrors(newErrors)) {
      const order = {
        address: { ...orderInput },
        basket: pizzaArray,
        timestamp: Date.now()
      }
      postOrderApi(order)
      setOrderInput(emptyOrder)
      setPizzaArray([])
      setOrderSnackbar(true)
      navigate('/')
    } else {
      handleOpen();
    }
  }

  const onBlur = (event) => {
    setErrorInput({
      ...errorInput,
      [event.target.name]: validCheck(orderInput[event.target.name], event.target.name)
    })
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <>
      <Container>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              error={errorInput.name.length > 0}
              fullWidth
              helperText={errorInput.name.join(', ')}
              onBlur={onBlur}
              onChange={onChange}
              name="name"
              label="Name"
              variant="outlined"
              value={orderInput.name}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              error={errorInput.line1.length > 0}
              helperText={errorInput.line1.join(', ')}
              onBlur={onBlur}
              onChange={onChange}
              name="line1"
              label="House name or number"
              variant="outlined"
              value={orderInput.line1}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              error={errorInput.road.length > 0}
              onBlur={onBlur}
              helperText={errorInput.road.join(', ')}
              onChange={onChange}
              name="road"
              label="Street"
              variant="outlined"
              value={orderInput.road}/>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              error={errorInput.town.length > 0}
              onBlur={onBlur}
              helperText={errorInput.town.join(', ')}
              onChange={onChange}
              name="town"
              label="City/town"
              variant="outlined"
              value={orderInput.town}/>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              error={errorInput.postcode.length > 0}
              onBlur={onBlur}
              helperText={errorInput.postcode.join(', ')}
              onChange={onChange}
              name="postcode"
              label="Postcode"
              variant="outlined"
              value={orderInput.postcode}/>
          </Grid>
        </Grid>
        <Box textAlign='center' sx={{ m: 2 }}>
        <Button
          onClick={handleClick}
          variant="contained"
          color="warning">
          Complete Order
        </Button>
        </Box>
      </Container>
      <Basket orderForm pizzaArray={pizzaArray} setPizzaArray={setPizzaArray}/>
      <OurSnackbar
        severity="warning"
        message="Please check for errors in your order form!"
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}

export default CreateOrderForm;