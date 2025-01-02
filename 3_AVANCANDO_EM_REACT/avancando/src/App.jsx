import './App.css'
import City from "./assets/city.jpg"
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import Fragment from './components/Fragment'
import Conteiner from './components/Conteiner'
import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UseDetails from './components/UseDetails'

function App() {

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 1000 },
    { id: 2, brand: "Lamborghini", color: "Vermelha", newCar: true, km: 0 },
    { id: 3, brand: "Porsche", color: "Preta", newCar: false, km: 20000 },
    { id: 4, brand: "BMW", color: "Branca", newCar: false, km: 5000 },
    { id: 5, brand: "Audi", color: "Azul", newCar: true, km: 500 },
    { id: 6, brand: "Mercedes", color: "Cinza", newCar: false, km: 30000 }
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  //atividade

  const pessoas = [
    { id: 1, name: "João", age: 17, profession: "Engenheiro" },
    { id: 2, name: "Maria", age: 25, profession: "Designer" },
    { id: 3, name: "Pedro", age: 15, profession: "Professor" },
    { id: 4, name: "Ana", age: 28, profession: "Médica" },
    { id: 5, name: "Lucas", age: 18, profession: "Estudante" }
  ];

  return (
    <>
      <div>
        <h1>Avançando em react</h1>
        {/*Imagem em Public*/}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>

        {/*Imagem em Assets*/}
        <div>
          <img src={City} alt="Cidade" />
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name="Carlos" />
        {/* destructuring */}
        <CarDetails brand="VW" km={10000} color="azul" newCar={false} />
        {/* reaproveitando */}
        <CarDetails brand="Fiat" km={5000} color="preto" newCar={true} />
        <CarDetails brand="BMW" km={0} color="vermelho" newCar={true} />
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            km={car.km}
            color={car.color}
            newCar={car.newCar} />
        ))}
        {/* fragment */}
        <Fragment />
        {/* children */}
        <Conteiner myValue="testing">
          <p>seu texto aqui</p>
        </Conteiner>
        {/* executar função */}
        <ExecuteFunction myFunction={showMessage} />
        {/* state lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
        {/* Atividade */}
        {pessoas.map((pessoa) => (
          <UseDetails
            key={pessoa.id}
            id={pessoa.id}
            name={pessoa.name}
            age={pessoa.age}
            profession={pessoa.profession} />
        ))}
      </div>
    </>
  )
}

export default App
