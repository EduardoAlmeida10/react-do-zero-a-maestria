import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx"
import Products from "./pages/products.jsx"
import NavBar from "./components/NavBar.jsx"

function App() {

  return (
    <>
      <div className='App'>
        <h1>Context</h1>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
