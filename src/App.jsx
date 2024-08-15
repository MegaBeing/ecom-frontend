import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
// Page Imports
import Home from './components/Home Page/HomePage';
import NavBar from './components/Navigation Bar/NavBar';
import ProductListPage from './components/ProductList Page/ProductListPage';
import CartPage from './components/Cart Page/CartPage';
import Product from './components/Product Page/Product';
import Authenticate from './components/Query/Authenticate.jsx';
import OrderListPage from './components/OrderList Page/OrderListPage.jsx';
import OrderPage from './components/Order Page/OrderPage.jsx';
import DesktopMessage from './components/DesktopMessage.jsx';
import AccountPage from './components/Account Page/AccountPage.jsx';
async function Refresh(refresh_token, api_url) {
  try {
    const body = JSON.stringify({ 'refresh': refresh_token });
    const response = await fetch(`${api_url}/user/refresh-token/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    });

    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem('access_token', data['access']);
      return true;
    } else if(response.status === 401) {
      return false;
    }
  } catch (error) {
    // console.error(error);
    return false;
  }
}

async function CheckAuth(api_url) {
  const access_token = localStorage.getItem('access_token');
  if (!access_token) return false;

  try {
    const body = JSON.stringify({ 'token': access_token });
    const response = await fetch(`${api_url}/user/verify/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    });

    if (response.status === 200) {
      return true;
    } else if(response.status === 401) {
      const refresh_token = localStorage.getItem('refresh_token');
      return Refresh(refresh_token, api_url);
    }
  } catch (error) {
    // console.error(error);
    return false;
  }
}

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const api_url = import.meta.env.VITE_API_URL;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  useEffect(() => {
    const checkAuth = async () => {
      const auth = await CheckAuth(api_url);
      setIsAuth(auth);
    };

    checkAuth();
  }, []);
  return (
    <>
      {isTabletOrMobile && (<BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage isAuth={isAuth} />} />
          <Route path='/product-list' element={<ProductListPage />} />
          <Route path='/product/:id' element={<Product isAuth={isAuth} />} />
          <Route path='/auth' element={<Authenticate setIsAuth={setIsAuth} />} />
          <Route path='/my-orders' element={<OrderListPage isAuth={isAuth} />} />
          <Route path='/order' element={<OrderPage isAuth={isAuth} />} />
          <Route path='/rating-form' element={<h1>Rating Form</h1>} />
          <Route path='/custom-order' element={<h1>Custom Order</h1>} />
          <Route path='/my-account' element={<AccountPage/>} />
        </Routes>
      </BrowserRouter>)}
      {isDesktopOrLaptop && 
        <DesktopMessage/>
      }
    </>
  );
}

export default App;
