import React from 'react'
import { useNavigate } from 'react-router'
import { CloseIcon, MinusIcon, PlusIcon } from '../common/Svg';

const ItemListOnCartPage = (props) => {
    const {data} = props
    console.log(props, 'sdasdasdadasdasdsad')
    return(
        <div key={data.title} className='row cart-list d-flex justify-content-between'>
                <div className='col-md-3'>
                    <img src={data.images[0]} />
                </div>
                <div className='col-md-4'>
                    <h5 className='text-secondary'>{data.name}</h5>
                    <h5 className='text-main mt-3 fw-bold'>₹ {data.original_price * data.qty}</h5>
                </div>
                <div className='col-md-3'>
                    <div className='cart-qty d-flex float-end'>
                        <button className='btn' disabled={data.qty <= 1} onClick={() => props.itemDecrease(data)}><MinusIcon /></button>
                        <input type='text' value={data.qty} onChange={() => console.log('s')} className="form-control"/>
                        <button className='btn' disabled={data.qty >= 10} onClick={() => props.itemIncrement(data)}><PlusIcon /></button>
                    </div>
                    {data.qty > 11 ? 'Quantity can not be more than 10' : ''}
                    {data.qty < 0 ? 'Quantity can not be less than 1' : ''}
                </div>
                <div className='col-md-2 text-danger text-end cursor-pointer' onClick={() => props.removeItem(data)}>Remove</div>
            </div>
    )
}

export default ItemListOnCartPage 