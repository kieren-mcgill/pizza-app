import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import CreateButton from "./CreateButton";
import Basket from "./Basket";
import { useState } from "react";
import PizzaForm from "./PizzaForm";


const Home = () => {

  const [pizzaArray, newPizzaArray] = useState([])

  const addPizza = (pizza) => {
    newPizzaArray([...pizzaArray, pizza])
  }


    return (
    <>
      <header>
        <Header pizzaArray={pizzaArray} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={(<CreateButton/>)}/>
          <Route path="/basket" element={(<Basket basket={pizzaArray}/>)}/>
          <Route path="/pizza-form" element={(<PizzaForm addPizza={addPizza}/>)}/>
          <Route path="*" element={<p>Page Not Found</p>}/>
        </Routes>
      </main>
    </>
  )
}

export default Home