import './App.css';

import { useState, /*useEffect*/ } from "react";

// 4- custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {

  //const [products, setProducts] = useState([]);

  // 4- custom hook
  const { data: items, httpConfig, loanding, error } = useFetch(url); //olhar a parte dos itens

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1- Resgatando dados

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);

  //     const data = await response.json();

  //     setProducts(data);
  //   }

  //   fetchData();

  // }, []);

  // 2- add de produtos

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3- carregamento dinâmico
    // const addedProducts = await response.json();

    // setProducts((prevProducts) => [
    //   ...prevProducts,
    //   addedProducts
    // ]);

    // 5- refatorando post

    if (name != "" && price != "") {
      httpConfig(product, "POST");
      setName("");
      setPrice("");
    }

  };

  // 8- desafio 6

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <>
      <div className="App">
        <h1>Lista de produtos</h1>
        {loanding && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {!error && <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>}
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input
                type="text"
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Preço:
              <input
                type="number"
                value={price}
                name='price'
                onChange={(e) => setPrice(e.target.value)} />
            </label>
            {loanding && <input type="submit" value="Aguarde um momento" disabled className='input-button' />}
            {!loanding && <input type="submit" value="Criar" className='input-button' />}
          </form>
        </div>
      </div>
    </>
  )
}

export default App
