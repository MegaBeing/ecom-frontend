import './index.css'
import NavBar from './components/Navigation Bar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home Page/HomePage'
import React from 'react'
import ProductListPage from './components/ProductList Page/ProductListPage'
import CartPage from './components/Cart Page/CartPage'
import Product from './components/Product Page/Product'
import Authenticate from './components/Query/Authenticate.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/order' element={<div>
          <h1>Order Page</h1>
        </div>} />
        <Route path='/product-list' element={<ProductListPage />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/auth' element={<Authenticate />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
