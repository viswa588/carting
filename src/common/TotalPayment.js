import React from 'react'

const TotalPayment = ({data}) => {
    console.log(data, 'props:121211312')
    const onlyPrice  = data.map(value => parseInt(value.original_price) * value.qty)
    // const convertIntoNumber = onlyPrice.map(Number)
    const sum  = onlyPrice.reduce((a, b) => a + b)
    console.log(onlyPrice, sum, 'onlyPriceonlyPrice')
    return(
        <>
            <h5 className='fw-bold mb-3 border-bottom pb-3'>Price Details</h5>
            <div className='d-flex justify-content-between mb-2 pb-1'>
                <h6>Price ({data.length} items)</h6>
                <h6>$ {sum}</h6>
            </div>
            <div className='d-flex justify-content-between mb-2 pb-1'>
                <h6>Delivery Charges</h6>
                <h6>Free</h6>
            </div>

            <div className='d-flex border-top border-bottom mb-3 pt-3 justify-content-between mb-2 pb-1'>
                <h5 className='fw-bold'>Total Amount</h5>
                <h5 className='fw-bold'>$ {sum}</h5>
            </div>

            {/* <h6 className='text-success'>You will save ₹2,860 on this order</h6> */}
        </>
    )
}
export default TotalPayment