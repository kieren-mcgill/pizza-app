import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import CreateButton from "./CreateButton";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import PizzaForm from "./PizzaForm";
import PreviousOrders from "./PreviousOrders"
import PizzaNotFound from "./PizzaNotFound";
import CreateOrderForm from "./CreateOrderForm";
import PreviousOrderSummary from "./PreviousOrderSummary";
import { getOrdersApi } from "./firebase-client";
import OurSnackbar from "./OurSnackbar";


const Home = () => {

  const [pizzaArray, setPizzaArray] = useState([])
  const [previousOrders, updatedPreviousOrders] = useState([])
  const [orderSnackbar, setOrderSnackbar] = useState(false);

  const addPizza = (pizza) => {
    setPizzaArray([...pizzaArray, pizza])
  }

  const getOrderList = () => {
    updatedPreviousOrders([getOrdersApi()])
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setOrderSnackbar(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header>
        <Header pizzaArray={pizzaArray} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={(<CreateButton/>)}/>
          <Route path="/basket" element={(<Basket pizzaArray={pizzaArray} setPizzaArray={setPizzaArray}/>)}/>
          <Route path="/pizza-form" element={(<PizzaForm addPizza={addPizza}/>)}/>
          <Route path="/order-form" element={(<CreateOrderForm pizzaArray={pizzaArray} setPizzaArray={setPizzaArray} setOrderSnackbar={setOrderSnackbar}/>)}/>
          <Route path="/previous-order-summary/:id" element={(<PreviousOrderSummary/>)}/>
          <Route path="/previous-orders" element={(<PreviousOrders getOrderList={getOrderList} previousOrders={previousOrders} />)}/>
          <Route path="*" element={<PizzaNotFound/>}/>
        </Routes>
        <OurSnackbar severity="success" message="We received your order!" open={orderSnackbar} setOpen={setOrderSnackbar}/>
      </main>
    </>
  )
}

export default Home