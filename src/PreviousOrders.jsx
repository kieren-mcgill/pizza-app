import PreOrderCard from "./PreOrderCard.jsx"
import { useEffect, } from "react";
import { Typography } from "@mui/material";

const PreviousOrders = ({getOrderList, previousOrders}) => {

  useEffect(() => {
    getOrderList()
    console.log(previousOrders)
  }, []);

  return (
    <>
      <Typography>
        Previous Orders
      </Typography>
    {previousOrders.map((order) => (
      <PreOrderCard
        key={order.id}
        order={order}/>
      ))}

    </>
  )
};

export default PreviousOrders