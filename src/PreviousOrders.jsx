import PreOrderCard from "./PreOrderCard.jsx"
import { useEffect, useState, } from "react";
import { Typography } from "@mui/material";

import { sortBy } from 'lodash';
import { getOrdersApi } from "./firebase-client";

const PreviousOrders = () => {

  const [previousOrders, updatedPreviousOrders] = useState([]);


  useEffect(() => {
    getOrdersApi().then(updatedPreviousOrders);
  }, []);

  const sortedPreviousOrders = sortBy(previousOrders, ['timestamp']).reverse();

  console.log(sortedPreviousOrders)

  return (
    <>
      <Typography>
        Previous Orders
      </Typography>
      {sortedPreviousOrders.map((order) => (
        <PreOrderCard
          key={order.id}
          order={order}/>
      ))}

    </>
  )
};

export default PreviousOrders