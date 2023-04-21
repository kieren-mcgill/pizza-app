import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import CreateButton from "./CreateButton";
import Basket from "./Basket";
import { useState } from "react";
import PizzaForm from "./PizzaForm";
import PreviousOrders from "./PreviousOrders"
import PizzaNotFound from "./PizzaNotFound";
import CreateOrderForm from "./CreateOrderForm";


const Home = () => {

  const [pizzaArray, setPizzaArray] = useState([])

  const addPizza = (pizza) => {
    setPizzaArray([...pizzaArray, pizza])
  }

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
          <Route path="*" element={<p>Page Not Found</p>}/>
          <Route path="/order-form" element={(<CreateOrderForm/>)}/>
          <Route path="/previous-orders" element={(<PreviousOrders />)}/>
          <Route path="*" element={<PizzaNotFound/>}/>
        </Routes>
      </main>
    </>
  )
}

export default Home