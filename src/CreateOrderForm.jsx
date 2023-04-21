import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { postOrderApi } from "./firebase-client";
import { isEmptyInput, hasSpecialCharacters, hasNumbers, invalidPostCode, checkHasErrors } from "./orderFormValidation"


const CreateOrderForm = ({ basket }) => {
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
  const [orderInput, setOrderInput] = useState(emptyOrder);

  const onChange = (event) => {
    setOrderInput({
      ...orderInput,
      [event.target.name]: event.target.value
    })
  }

  const validCheck = (fieldInput, event) => {
    const errorMessages = []
    errorMessages.push(isEmptyInput(fieldInput))
    errorMessages.push(hasSpecialCharacters(fieldInput))
    if (event.target.name === 'name' || event.target.name === 'road' || event.target.name === 'town') {
      errorMessages.push(hasNumbers(fieldInput))
    }
    if (event.target.name === 'postcode') {
      errorMessages.push(invalidPostCode(fieldInput))
    }
    setErrorInput({
      ...errorInput,
      [event.target.name]: errorMessages.filter(el => el !== '')
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (checkHasErrors(errorInput)) {
      const order = {
        address: { ...orderInput },
        basket: basket,
        timestamp: Date.now()
      }
      postOrderApi(order)
      setOrderInput(emptyOrder)
    } else {
      
    }
  }

  const onBlur = (event) => {
    setErrorInput({
      ...errorInput,
      [event.target.name]: []
    })
    validCheck(orderInput[event.target.name], event)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
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
              label="House Name/ Number"
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
              label="City/Town"
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
              label="Post Code"
              variant="outlined"
              value={orderInput.postcode}/>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">Complete Order</Button>
      </form>
      <p>Basket</p>
    </div>
  )
}


export default CreateOrderForm;