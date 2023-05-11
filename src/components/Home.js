import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation} from 'react-router'
import { AllProductList } from '../action/Action'
import { BreadcrumbList, Loader } from '../common/BreadcrumbList'
import Footer from '../common/Footer'
import HomeBanner from '../common/HomeBanner'
import HomeThreeCard from '../common/HomeThreeCard'
import { getAllCategories, getAllProduct} from '../services/Auth'
import ProductList from './ProductList'

const Home = (props) => {
  const location = useLocation()
  const getProductList = useSelector((state) => state)
  const filterItems = getProductList
  console.log(getProductList, 'getProductListgetProductList')
  useEffect(() => {
    getAllCategories()
    getAllProduct()
  },[])
  return (<>
    <BreadcrumbList url={location}/>
    <>
      <HomeBanner/>
      <div className='container'>
      {getProductList.AllProductStore.productListWait ? <Loader/>
           : <>
        <div className='row mt-4'>
          {getProductList.AllProductStore.womenProducts.slice(0, 1).map((data) => {
            return(
              <div className="col-md-6" key={data.id}><HomeThreeCard data={data}/></div>
            )
          })}
          {getProductList.AllProductStore.menProducts.slice(0, 1).map((data) => {
            return(
              <div className="col-md-6" key={data.id}><HomeThreeCard data={data}/></div>
            )
          })}
        </div>
        <div className='latest-products mt-5 pt-5'>
          <h6 className='text-center text-main mb-2 fw-lighter'><i>New Collection</i></h6>
          <h2 className='text-center pb-4 heading'><span>New Arrivals</span></h2>
          <div className='row mt-4'>
            {getProductList.AllProductStore.productList?.slice(0, 8)?.map((data) => {
                return (
                  <div className="col-md-3 mb-4 pb-3" key={data.id}><ProductList showAddToCart={false} data={data}/></div>
                )
            })}
            </div>
        </div>
        </> }
      </div>
    </>
    </>
  )
}

export default Home