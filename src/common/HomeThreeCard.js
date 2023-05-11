import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeThreeCard = (props) => {
    const {data} = props
    console.log(data, 'HomeThreeCard')
    const navigate = useNavigate();
    // const handleOnClick = (data) => {
    //     navigate(`/products/`,  {state:data})
    // };
    return(
        <Link to="/products/" state={data}>
        <div className="cursor-pointer" key={data.id}>
            <div className='home-card'>
                <img src={!data?.image ? data.images[0] : data?.image} className='w-100'/>
                <div className='d-flex text-center justify-content-center align-items-center home-card-caption'>
                    <div>
                        <h5 className='mb-4'>Shop by category</h5>
                        {/* <h3>{data?.name}</h3> */}
                        <h2 className='fw-bold'>{data?.gender} Collection</h2>
                        {/* <Link className="btn btn-main" to="/products/" state={data}>Shop</Link> */}
                        <button className="mt-4 btn btn-main px-4">Shop</button>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
} 
export default HomeThreeCard