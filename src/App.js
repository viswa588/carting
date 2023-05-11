import React, {useEffect, useState} from 'react';
import Login from './components/Login';
import Header from './common/Header';
import Signup from './components/SignUp';
import './style.css';
import { BrowserRouter, Redirect, Route, Routes, useHistory, Navigate, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import { Outlet, useLocation, useNavigate } from 'react-router';
import ProtectedRoute from './common/ProtectedRoute';
import { useSelector } from 'react-redux';
import Products from './components/Products';
import NavigationRoutes from './common/NavigationRoutes';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Footer from './common/Footer';
import { ToastContainer } from 'react-bootstrap';
import Checkout from './components/Checkout';
// import { getAuth } from 'firebase/auth';
// import {app} from './firebase'
// import { Navigate } from 'react-router-dom';

export default function App(props) {
  console.log(process.env, "environment");
  const getState = useSelector((state) => state.LoginStore.isLogin)
  const cartItemList = useSelector((state) => state.ItemAddTOCart.toastContent)
  const [hideToast, setHideToast] = useState(cartItemList)
  console.log(getState,  'getState')
  const location = useLocation()
  // console.log(location,'navigate111111')
  const PrivateRoute = () => {
    return getState ? <Outlet /> : <Navigate to="/login" />;
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  },[location.pathname])
  return (
      <>
      <Header />
      <Routes>
          {NavigationRoutes.map((data) => {
            return <Route key={data.name} exact path={data.path} element={data.Component}/>
          })}
          <Route path="/products/:id" element={<ProductDetails />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route path="/checkbout" element={<Checkout />}/>
          </Route>
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
        {/* <Route path="/admin/create" exact element={<CreateList />} /> */}
        {/* <Route exact path='/' element={<ProtectedRoute Component={Home} />} /> */}
      </Routes>
      {/* {getState ? <Footer /> : '' } */}
      <Footer />
    </>
  );
}
