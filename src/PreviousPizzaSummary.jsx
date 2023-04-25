import PizzaForm from "./PizzaForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./firebase-client";

const PreviousPizzaSummary = () => {
  const { pizzaid, orderid } = useParams();
  const [previousPizza, setPreviousPizza] = useState(undefined);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${baseUrl}/orders/${orderid}/basket.json`,
    }).then(({ data }) => {
      if (data) {
        setPreviousPizza(data.find((p) => p.id = pizzaid));
      } else {
        setHasError(true);
      }
    })
  }, [])

  if (hasError) {
    return (
      <p>Error: Pizza not found</p>
    )
  }

  if (!previousPizza) {
    return (
      <p>Fetching Old Pizza</p>
    )
  }

  return (
    <PizzaForm previousPizza={previousPizza}/>
  )
}

export default PreviousPizzaSummary;