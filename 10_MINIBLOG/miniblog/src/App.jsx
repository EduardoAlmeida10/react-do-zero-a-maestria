import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'

import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Dashboard from "./pages/Dashboard/Dashboard"
import CreatePost from "./pages/CreatePost/CreatePost"

import { AuthProvider } from './context/AuthContext.jsx'


function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className='App'>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className="conteiner">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/posts/create' element={<CreatePost />} />
              <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
