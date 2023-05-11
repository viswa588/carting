import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ItemAddToCart } from '../action/Action';
import { BagIcon, MinusIcon, PlusIcon, Start, StartO } from '../common/Svg';


 const ProductList = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    const getData = props.data
    console.log(getData, 'props::::::::::')
    const dispatch = useDispatch()
    const itemsAddToCart = (data) => dispatch(ItemAddToCart(data))
    const goToDetailPage = (data) => {
        // const filtertedURL = data.title.split(' ').join('-')
        // const filtertedURL = data.name.replaceAll(' ',  '-')
        // console.log(filtertedURL, 'filtertedURL');
        navigate(`/products/${data.name}`, {state:data})
        console.log(data.name, 'navigate111rerer');
    }
    return (
        <div className="product-wrap border h-100 mb-25" key={getData.id}>
            <div className="product-img">
                {/* <Link to={`${location.pathname}/${getData.id}`}></Link> */}
                <span className='cursor-pointer' onClick={() => goToDetailPage(getData)}>
                    <img className="w-100" src={getData.images[0]} alt="" />
                </span>
            </div>
            <div className="product-content text-center">
                <h6 className='font-weight-bold mb-2'>
                    <Link to="/">{getData.title}</Link>
                </h6>
                <div className="product-rating">
                    <StartO className="yellow me-2"/>
                    <StartO className="yellow me-2"/>
                    <StartO className="yellow me-2"/>
                    <StartO className="yellow me-2"/>
                    <StartO className="yellow me-2" />
                </div>
                <div className="product-price mt-3">
                    <h6>₹{getData.original_price} <span className='px-2'>-</span> <del className='text-secondary fw-light'>₹{getData.original_price + 100}</del></h6>
                    <span className="old badge bg-light text-black fw-lighter">{getData.category}</span>
                </div>
                {props.showAddToCart === false ?  '' : <button className="mt-3 btn btn-main px-3 py-2 w-100" onClick={() => props.itemsToCart(getData)}>Add To Cart</button>}
            </div>
        </div>
    )
 }

export default ProductList