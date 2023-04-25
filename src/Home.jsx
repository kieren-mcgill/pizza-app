import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import CreateButton from "./CreateButton";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import PizzaForm from "./PizzaForm";
import CreateOrderForm from "./CreateOrderForm";
import OurSnackbar from "./OurSnackbar";
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
          <Route path="*" element={<p>Page Not Found</p>}/>
        </Routes>
        <OurSnackbar severity="success" message="We received your order!" open={orderSnackbar} setOpen={setOrderSnackbar}/>
      </main>
    </>
  )
}

export default Home