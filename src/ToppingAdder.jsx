import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from "@mui/material";

const ToppingAdder = ({ topping, amount, increaseNumber, decreaseNumber }) => {

  return (
    <>
      <p>{topping}</p>
      <IconButton onClick={() => decreaseNumber(topping)}>
        <RemoveCircleOutlineIcon/>
      </IconButton>
      <p>{amount}</p>
      <IconButton onClick={() => increaseNumber(topping)}>
        <AddCircleOutlineIcon/>
      </IconButton>
    </>
  )
}
export default ToppingAdder