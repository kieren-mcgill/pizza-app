import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import CreateButton from "./CreateButton";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import PizzaForm from "./PizzaForm";
import PreviousOrders from "./PreviousOrders"
import PizzaNotFound from "./PizzaNotFound";
import PreviousPizzaSummary from "./PreviousPizzaSummary";
import PreviousOrderSummary from "./PreviousOrderSummary";
import OurSnackbar from "./OurSnackbar";
import CreateOrderForm from "./CreateOrderForm";

import mainfon from "./img/mainfon.jpg"

const Home = () => {

  const [pizzaArray, setPizzaArray] = useState([])
  const [orderSnackbar, setOrderSnackbar] = useState(false);

  const addPizza = (pizza) => {
    setPizzaArray([...pizzaArray, pizza])
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setOrderSnackbar(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header style={{ backgroundColor: "#FFA700", padding: "1rem" }}>
        <Header pizzaArray={pizzaArray} />
      </header>
      <main style={{ backgroundImage:`url(${mainfon})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }} >
        <Routes>
          <Route path="/" element={(<CreateButton/>)}/>
          <Route path="/basket" element={(<Basket pizzaArray={pizzaArray} setPizzaArray={setPizzaArray}/>)}/>
          <Route path="/pizza-form" element={(<PizzaForm addPizza={addPizza} />)}/>
          <Route path="/order-form" element={(<CreateOrderForm pizzaArray={pizzaArray} setPizzaArray={setPizzaArray} setOrderSnackbar={setOrderSnackbar}/>)}/>
          <Route path="*" element={<PizzaNotFound/>}/>
          <Route path="/previous-orders" element={(<PreviousOrders/>)}/>
          <Route path="/previous-order-summary/:orderid">
            <Route index element={(<PreviousOrderSummary/>)}/>
            <Route path=":pizzaid" element={<PreviousPizzaSummary/>}/>
          </Route>
        </Routes>
        <OurSnackbar severity="success" message="We received your order!" open={orderSnackbar} setOpen={setOrderSnackbar}/>
      </main>
    </>
  )
}

export default Home