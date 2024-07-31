import './index.css'
import NavBar from './components/Navigation Bar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './components/Home Page/HomePage'
import React from 'react'
import ProductListPage from './components/ProductList Page/ProductListPage'
function App() {
  const url = import.meta.env.VITE_API_URL;
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<div>
          <h1>Cart Page</h1>
        </div>} />
        <Route path='/order' element={<div>
          <h1>Order Page</h1>
        </div>} /> */}
      <Route path='/' element={<ProductListPage/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
