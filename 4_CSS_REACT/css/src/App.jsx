import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {

  const n = 15;
  const [name] = useState("Eduardo");
  const redTitle = true;

  return (
    <>
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este paragráfo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{ color: "magenta", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>
        CSS dinâmico
      </h2>
      <h2 style={name === "Eduardo" ? ({ color: "green", backgroundColor: "#000" }) : null}>
        CSS dinâmico
      </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
      <h2 className='my_title'>Testando</h2>
    </>
  )
}

export default App
