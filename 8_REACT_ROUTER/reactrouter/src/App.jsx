import './App.css'

// 1 - Configurando react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import NavBar from './components/NavBar.jsx'
import Product from './pages/Product.jsx'
import Info from './pages/Info.jsx'
import NotFount from './pages/NotFount.jsx'
import SearchForm from './components/SearchForm.jsx'
import Search from './pages/Search.jsx'


function App() {

  return (
    <>
      <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
          {/* 2 - links com react router */}
          <NavBar />  
          {/* 9 - search */}
          <SearchForm />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* 4 - rota dinâmica */}
            <Route path='/products/:id' element={<Product />} />
            {/* 6 - nested routes */}
            <Route path='/products/:id/info' element={<Info />} />
            {/* 9 - search */}
            <Route path='/search' element={<Search />} />
            {/* 10 - redirect */}
            <Route path='/company' element={<Navigate to='/about' />} />
            {/* 7 - route 404 */}
            <Route path='*' element={<NotFount />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
