import React, { useState } from 'react'
import {Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ItemRemoveToCart, LogoutAction } from '../action/Action'
import NavigationRoutes from './NavigationRoutes'
import { BagIcon, CloseIcon } from './Svg'

function Header() {
  const getDataFromStore = useSelector(state => state.ItemAddTOCart)
  const getState = useSelector((state) => state.LoginStore)
  const {items} = getDataFromStore
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(getDataFromStore,  'LoginHeader213123123')
  const removeItemsToCart = (data) => dispatch(ItemRemoveToCart(data))
  const logout = (data) => dispatch(LogoutAction(data))
  const [show, setShow] = useState(true)
  // console.log(process.env.REACT_APP_API_PATH, 'env:::')
  return (
    <Navbar bg="white py-2" expand="lg">
      <ToastContainer autoClose={800}/>
      <div className="container">
        <Navbar.Brand className='mr-4 pe-5'>Kk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {NavigationRoutes.map((data) => {
              return (
              <div key={data.name}>
                {!data?.subNav ? <Link className='nav-link' to={data.path}>{data.name}</Link>
                   : <>
                    {data?.subNav ? 
                      <NavDropdown show={show}  title={data.name} className={show ? 'navshow' : 'navhide'} id="basic-nav-dropdown" >
                        {data?.subNav?.map((data) => 
                          <Link key={data.name} className='nav-link' to={data.path}>{data.name}</Link>)
                        }
                    </NavDropdown> 
                    : '' } 
                  </>}
              </div>)
            })}
          </Nav>
          
          <Nav className="ms-auto">
            <Link className='nav-link' to="/cart"><span className='cursor-pointer'><BagIcon />
            {!items.length < 1 ? <small className="badge rounded-pill bg-danger">{items.length}</small>: ''}</span></Link>
            {!getState.isLogin ? 
              <>
                <Link className='nav-link' to="/login">Login</Link>
                <Link className='nav-link' to="/signup">SignUp</Link>
              </> 
               :
               <>
                  <NavDropdown className='cart-dropdown' show={show}  title={<span>Hello {getState.userProfile?.name}</span>}>
                    <Link className='nav-link' to="/profile">Profile</Link>
                    <Link className='nav-link' to="/login" onClick={() => logout()}>Logout</Link>
                  </NavDropdown>
               </>
               
            }
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header