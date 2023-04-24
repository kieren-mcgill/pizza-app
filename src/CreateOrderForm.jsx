import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { postOrderApi } from "./firebase-client";
import {
  isEmptyInput,
  hasSpecialCharacters,
  hasNumbers,
  invalidPostCode,
  checkHasErrors,
} from "./orderFormValidation"
import OurSnackbar from "./OurSnackbar";
import { useNavigate } from "react-router-dom";
import Basket from "./Basket";
import { logDOM } from "@testing-library/react";

const CreateOrderForm = ({ pizzaArray, setPizzaArray, setOrderSnackbar }) => {
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
    setErrorInput({ ...errorInput, [key]: [] })
    errorMessages.push(isEmptyInput(fieldInput))
    errorMessages.push(hasSpecialCharacters(fieldInput))
    if (key === 'name' || key === 'road' || key === 'town') {
      errorMessages.push(hasNumbers(fieldInput))
    }
    if (key === 'postcode') {
      errorMessages.push(invalidPostCode(fieldInput))
    }
    setErrorInput({
      ...errorInput,
      [key]: errorMessages.filter(el => el !== '')
    })
  }

  const navigate = useNavigate()

  const handleClick = () => {

    // I don't understand why this doesn't do the validation for each of the text fields when you press the button
    Object.keys(orderInput).map((key) => validCheck(orderInput[key], key))


    if (!checkHasErrors(errorInput)) {
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
    validCheck(orderInput[event.target.name], event.target.name)
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <div>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField error={errorInput.name.length > 0}
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
      <Button
        onClick={handleClick}
        variant="contained">
        Complete Order
      </Button>
      <Basket pizzaArray={pizzaArray} setPizzaArray={setPizzaArray} readOnly/>
      <OurSnackbar severity="warning" message="Please check for errors in your order form!" open={open}
                   setOpen={setOpen}/>
    </div>
  )
}


export default CreateOrderForm;