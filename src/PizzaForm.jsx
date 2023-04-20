import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { baseKeys, bases } from "./bases";
import { useState } from "react";

const PizzaForm = () => {

  const [pizza, setPizza] = useState(
    {
      base: "largeDeepPan"
    }
  )

  const [pizzaList, addToPizzaList] = useState([]);

  const handleChange = (e) => {
    setPizza({...pizza,
      base : e.target.value})

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addToPizzaList([...pizzaList, pizza])
    setPizza({
      base: "largeDeepPan"
    })
    console.log(pizzaList)
  }



  return (
    <>
    <FormControl>
      <InputLabel id="base">Select Base</InputLabel>
    <Select id="base" label="Select Base" onChange={handleChange} value={pizza.base}>
      {baseKeys.map((base, i) => <MenuItem key={i} value={base}>{bases[base].label}</MenuItem>)}
    </Select>
      <Button onClick={handleSubmit}>Add Your Pizza</Button>
    </FormControl>
      </>
  )
}

export default PizzaForm;