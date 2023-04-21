import PreOrderCard from "./PreOrderCard.jsx"
import { useState } from "react";
import { Typography } from "@mui/material";
import { getOrdersApi } from "./firebase-client";

const PreviousOrders = () => {

  const [previousOrders, updatedPreviousOrders] = useState([])



  const getOrderList = () => {
    updatedPreviousOrders([getOrdersApi])
  }

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