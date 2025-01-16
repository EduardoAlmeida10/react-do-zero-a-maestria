import { CounterContext } from "../context/CounterContext";
import { useContext } from "react";

const Products = () => {

  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Products</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Products