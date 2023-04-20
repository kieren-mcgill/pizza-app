import { Routes, Route } from "react-router-dom";


const Home = () => {


  return (
  <main>
    <Header/>
    <Routes>
      <Route path="/" element={(<CreateButton />)}/>
      <Route path="/create-pizza" element={(<PizzaForm/>)}/>
      <Route path="/basket" element={(<BasketSummary/>)}/>
      <Route path="previous-orders" element={(<PreviousOrders/>)}/>
      <Route path="previous-orders:id" element={(<OrderSummary/>)}/>

      <Route path="*" element={<p>Page Not Found</p>}/>

    </Routes>
  </main>

  )
}

export default Home