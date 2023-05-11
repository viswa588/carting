import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AllCategories, AllProductList, ItemAddToCart } from '../action/Action';
import { BreadcrumbList, Loader } from '../common/BreadcrumbList';
import FilterComponent from '../common/FilterComponent';
import { getAllCategories, getAllProduct, getProductByfilter } from '../services/Auth';
import ProductList from './ProductList';
import ReactPaginate from 'react-paginate';
import { PaginatedItems } from '../common/Pagination';


 const Products = (props) => {
    // const notify = () => toast("Wow so easy!");
    const location = useLocation()
    const {state} = location
    console.log(state, 'propsprops11124')
    const [clearFilter, setClearFilter] = useState('')
    const [showToast, setShowToast] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getProductList = useSelector((state) => state.AllProductStore)
    const getDataFromStore = useSelector((state) => state.getAllCategories)
    const [passParams, setPassParams] = useState()
    const [passParamsNew, setPassParamsNew] = useState()
    const [passParamsNew1, setPassParamsNew1] = useState([])

    
    const itemsAddToCart = (data) => dispatch(ItemAddToCart(data))
    const getCategoryData = (data) => {
        setClearFilter(data)
        console.log(data, clearFilter, 'clearFilter111')
    }
    const itemsToCart = (data) =>{
        setShowToast(true)
        itemsAddToCart(data)
    }
    const [message, setMessage] = useState("");
    // const applyFilter = (message) => {
    //     setMessage(message);
    //     console.log(message, 'messageadadADd')
    //   };
        const [searchParams, setSearchParams] = useSearchParams();
        console.log(searchParams, 'searchParamssearchParamssearchParamssearchParams')
        const [theCategory, setTheCategory] = useState([]);
        const [theColor, setColor] = useState([]);
        const [theGender, setGender] = useState([]);
        const [theRating, setRating] = useState('');
        const [category, setCategory] = useState([
            {heading:'Category', data:['shoes', 'clothes']},
            {heading:'Color', data:['Black', 'Red', 'White', 'Blue']},
            {heading:'Gender', data:['Men', 'Women']},
        ])
      const getResult = (e, data) => {
        console.log(e,  data.heading, 'headingsasSa')
        setMessage(e);
        const newArray1 = [...theCategory]
        const newArray2 = [...theColor]
        const newArray3 = [...theGender]
        const ifExit = newArray1.includes(e)
        if(newArray1.includes(e) || newArray2.includes(e) || newArray3.includes(e)){
            newArray1.splice(newArray1.indexOf(e), 1)
            newArray2.splice(newArray2.indexOf(e), 1)
            newArray3.splice(newArray3.indexOf(e), 1)
        }
        else{
            newArray1.push(e)
            newArray2.push(e)
            newArray3.push(e)
        }
        if(data.heading === 'Category'){
            setTheCategory(newArray1)
        }
        else if(data.heading === 'Color'){
            setColor(newArray2)
        }
        else if(data.heading === 'Gender'){
            setGender(newArray3)
        }
    }
    console.log(location,'navigate111111')
    useEffect(() => {
        setSearchParams({category:theCategory, color:theColor, gender:theGender });
        getAllProduct(searchParams)
    },[theCategory, theColor, theGender, searchParams])
    return <div>
        {/* {passParamsNew1.map((items) => {
            return items
        })} */}
        <BreadcrumbList url={location}/>
        {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => handlePageClick(e)}
        pageRangeDisplayed={5}
        pageCount={20}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
        <div className='container'>
            {getProductList.productListWait ? <Loader /> : ''}
            {/* {passParams} */}
            <div className='row'>
                <div className='col-md-2'>
                    <FilterComponent category={getDataFromStore.list} categoryState={state} getCategoryData={(data) => getCategoryData(data)} clearFilter={clearFilter} applyFilter={getResult} category={category} searchParams={searchParams} />
                </div>
                <div className='col-md-10'>
                    <div className='row'>
                        {getProductList?.productList?.map((data, index) => {
                            return (
                                <div className="col-md-3 mb-4 pb-3" key={index}>
                                    <ProductList data={data} itemsToCart={(data) => itemsToCart(data)} showToast={showToast}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
 }

export default Products