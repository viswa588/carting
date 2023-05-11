import React from 'react';
import { useNavigate } from 'react-router';
import bannerImage from './../images/banner.jpg'
const HomeBanner = () => {
    const navigate = useNavigate()
    return(
        <div className='home-banner position-relative'>
        <img src={bannerImage} className="w-100"/>
        <div className='banner-caption'>
          <h1 className="mb-0">Winter Offers</h1>
          <h3 className="mb-4">Get upto 40% Off</h3>
          <button className='btn btn-shoping' onClick={() => navigate('/products')}>Shop Now</button>
        </div>
      </div>
    )
}

export default HomeBanner