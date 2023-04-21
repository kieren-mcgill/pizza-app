import Basket from "./Basket";
import { useParams } from "react-router-dom";



const PreviousOrderSummary = ( {orders} ) => {
  const { id } = useParams();
  const order = orders.find((o) => o.id === id)

  return (
    <>
      <Basket readOnly pizzaArray={order.basket}/>
    </>
  )
}

export default PreviousOrderSummary;