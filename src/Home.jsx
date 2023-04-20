import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import CreateButton from "./CreateButton";
import BasketSummary from "./BasketSummary";
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
          <Route path="/basket" element={(<BasketSummary/>)}/>
          <Route path="/pizza-form" element={(<PizzaForm pizzaArray={pizzaArray} addPizza={addPizza}/>)}/>
          <Route path="*" element={<p>Page Not Found</p>}/>
        </Routes>
      </main>
    </>
  )
}

export default Home