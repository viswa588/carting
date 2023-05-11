import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { ItemDecrease, ItemIncrease, ItemRemoveToCart } from '../action/Action';
import { BreadcrumbList } from '../common/BreadcrumbList';
import { CloseIcon, MinusIcon, PlusIcon } from '../common/Svg';
import EmptyCart from '../common/EmptyCart';
import ItemListOnCartPage from '../common/ItemListOnCartPage';
import { Pagination } from 'react-bootstrap';
import TotalPayment from '../common/TotalPayment';
 const Cart = () => {
    const navigate = useLocation()
    const getData = useSelector(data => data.ItemAddTOCart.items)
    const storeState = useSelector((state) => state.AddToCart)
    const dispatch = useDispatch()
    const itemIncrement = (data) => dispatch(ItemIncrease(data))
    const itemDecrease = (data) => dispatch(ItemDecrease(data))
    const removeItem = (data) => dispatch(ItemRemoveToCart(data))
    console.log(getData,  'LoginHeader21312312344')
    return (
        <>
        <BreadcrumbList url={navigate}/>
            <div className='container'>
            {getData.length == 0 ? <EmptyCart/> : 
                <div className="row">
                    <div className='col-md-8'>
                        <h3 className='fw-bold'>Cart</h3>
                        <div className='cart-wrapper'>
                            {getData.map((item) => 
                                <ItemListOnCartPage key={item.id} data={item} itemDecrease={() => itemDecrease(item)}  itemIncrement={() => itemIncrement(item)} removeItem={()=> removeItem(item)} />
                            )}
                        </div>
                    </div>
                    <div className='col-md-4 ps-4'>
                        <TotalPayment data={getData}/>
                    </div>
                </div>
                }
            </div>
        </>
    )
 }

 export default Cart