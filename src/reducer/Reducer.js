import { json } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import {ADD_ITEMS_TO_CART, ADD_TO_CART, ALL_CATEGORIES, ALL_CATEGORIES_ERROR, ALL_CATEGORIES_WAIT, ALL_PRODUCTS, ALL_PRODUCTS_ERROR, ALL_PRODUCTS_WAIT, CART_ITEM, CHANGE_QTY, DECREASE_QTY, FILTER_BY_CATEGORY, INCREASE_QTY, ITEM_ADD_TO_CART, ITEM_DECREASE, ITEM_INCREASE, ITEM_REMOVE_TO_CART, LOGIN, LOGIN_ERROR, LOGOUT, SIGNUP, SIGNUP_ERROR, SINGLE_PRODUCT, SINGLE_PRODUCT_ERROR, SINGLE_PRODUCT_LOADING} from '../constant/ActionType';
// import { indexOf } from 'json-server-auth';
console.log(localStorage.getItem('accessToken'), 'saddadasd')
let auth = localStorage.getItem('accessToken')

const toastContentMain = <ToastContainer />
const loginDetails = {
  isLogin:auth ? true : false,
  accessToken:'',
  error:'',
  toast:'',
  userProfile:JSON.parse(localStorage.getItem('userDetails'))
}
const allProduct = {
  productList : [],
  womenProducts : [],
  menProducts : [],
  newProducts: [],
  productError: '',
  productListWait: false,
  cartItem: '',
  qty:10
}
const singleProduct = {
  items:{},
  loading:false
}
const productQty = {
  productWithID:'',
  product:[],
  qty: 1,
  error:''
}

const filterValue = {
  filterParams : [],
  filterUniqueItems : [],
  newFilterUniqueItems : []
}
const getItems = JSON.parse(localStorage.getItem('CartList'))
console.log(getItems, 'getItems')
const itemList ={
  items: getItems ? getItems : [],
  filterItems: [],
  toast:'',
  qty: 1,
  toastContent:toastContentMain
}
const categoriesData = {
  list: []
}

export const LoginReducer = (state = loginDetails, action) => {
  switch (action.type){
    case LOGIN: {
      console.log(action.payload,'LoginReducer1')
      let getToken = action.payload.accessToken
      localStorage.setItem('accessToken', JSON.stringify(getToken))
      localStorage.setItem('userDetails', JSON.stringify(action.payload))
      return {
        ...state,
        accessToken: action.payload.accessToken,
        isLogin: localStorage.getItem('accessToken') ? true : false,
        toast:toast.success('Login Successfull!',{position: toast.POSITION.TOP_RIGHT}),
        userProfile:action.payload.user
      }
    }
    case LOGIN_ERROR:{
      return{
        ...state,
        error:action.payload,
        toast:toast.error(action.payload,{position: toast.POSITION.TOP_RIGHT})
      }
    }
    case LOGOUT : {
      console.log(action.payload,'LoginReducerLogout')
      return{
        ...state,
        accessToken:localStorage.clear(),
        isLogin:false,
        toast:toast.error('Logout Successfull!',{position: toast.POSITION.TOP_RIGHT})
      }
    }
    default : 
      return {
        ...state
      }
  }
}

export const SignupReducer = (state = [], action) => {
  switch (action.type){
    case SIGNUP: {
      return {
        ...state,
        toast:toast.success('Signup Successfull!',{position: toast.POSITION.TOP_RIGHT}),
      }
    }
    default : 
      return {
        ...state
      }
  }
}

export const AllProductReducer = (state = allProduct, action) => {
  switch (action.type){
    case ALL_PRODUCTS:
    return {
      ...state,
      productList: action.payload?.map(el => ({
        ...el,
        qty: 1,
    })),
    womenProducts: action.payload.filter((items) => items.gender === 'WOMEN'),
    menProducts: action.payload.filter((items) => items.gender === 'MEN')
    }
    case ALL_PRODUCTS_ERROR:
      return{
        ...state,
        productError:action.payload
      }
    case ALL_PRODUCTS_WAIT:
      return {
        ...state,
        productListWait : action.payload
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export const SingleProductReducer = (state = singleProduct, action) => {
  switch(action.type){
    case SINGLE_PRODUCT:
      return{
        ...state,
        items:{...action.payload, qty: 1},
        loading:false
      }
      case SINGLE_PRODUCT_LOADING:
        return{
          ...state,
          loading:true
      }
      case SINGLE_PRODUCT_ERROR:
        return{
          ...state,
          loading:false,
          error:action.payload,
      }
      default:{
        return {
          ...state
        }
      }
  }
}
export const ItemsAddToCart = (state = itemList, action) => {
  switch(action.type){
    case CART_ITEM:
      console.log(action.payload, 'allProduct')
      return{
        ...state,
        qty:1
      }
    case ITEM_ADD_TO_CART:{
      const ifIdExist = state.items.find((items) => items.id === action.payload.id)
      localStorage.setItem('CartList', JSON.stringify(state.items))
      let sum = ifIdExist?.qty + action.payload.qty
      console.log(action.payload.qty, 'action.payload.qty')
      if(ifIdExist?.qty >= 10 || sum >= 11){
        ifIdExist ? action.payload.qty : state.items.push({...action.payload, qty:action.payload.qty})
        return{
          ...state,
          toast:toast.error('can not add item more than 10',{position: toast.POSITION.TOP_RIGHT}),
        }
      }
      else{
        ifIdExist ? ifIdExist.qty += action.payload.qty : state.items.push({...action.payload, qty:action.payload.qty})
        return{
          ...state,
          toast:toast.success('Item added to cart',{position: toast.POSITION.TOP_RIGHT}),
        }
      }
      }
      case ITEM_INCREASE:
        console.log(state, 'allProduct112')
        const result1  = action.payload.qty >= 11 ? 11 : action.payload.qty += 1
        localStorage.setItem('CartList', JSON.stringify(state.items))
        return{
          ...state,
          qty:result1,
          error:result1 >= 11 ? 'Quantity can not be more than 10' : '',
          // toast:toast.success('Item added to cart',{position: toast.POSITION.TOP_RIGHT}),
        }
      case ITEM_DECREASE:{
        console.log(action.payload, 'allProduct2')
        const result1  = action.payload.qty <= 0 ? 0 : action.payload.qty -= 1
        action.result
        localStorage.setItem('CartList', JSON.stringify(state.items))
        return{
          ...state,
          qty:result1,
          error:result1 <= 0 ? 'Quantity can not be less than 1' : ''
        }
      }
      case ITEM_REMOVE_TO_CART:{
        const removeItem = state.items.filter((item) => item.id !== action.payload.id)
        localStorage.setItem('CartList', JSON.stringify(removeItem))
        return{
          ...state,
          items:removeItem,
          toast: toast.error('Item removed from cart',{position: toast.POSITION.TOP_RIGHT}),
          // toastContent: <ToastContainer />
        }
      }
      default:{
        return{
          ...state,
        }
      }
  }
}




export const AddItemToCartReducer = (state = productQty, action) => {
  switch (action.type){
    case CART_ITEM:
      console.log(action.payload, 'allProduct')
      return{
        ...state, 
        product:action.payload,
        qty:1
      }
      case CHANGE_QTY:
      return{
        ...state,
        inputQty:action.payload
      }
      case ADD_TO_CART:
      return{
        ...state,
        product:allProduct.productList,
        cartQTY:state.cartQTY,
      }
      default:
        return{
          ...state
        }
  }
}

export const getAllCategoriesReducer = (state=categoriesData, action) => {
  switch (action.type){
    case ALL_CATEGORIES:{
      return{
        ...state,
        list:action.payload
      }
    }
    default:{
      return{
        ...state
      }
    }
  }
}

export const FilterReducer = (state = filterValue, action) => {
  let result = []
  // if(result.includes(action.payload)){
  //   result.splice(result.indexOf(action.payload, 1))
  // }
  // else{
  //   result.push(action.payload)
  // }
  

  switch(action.type){
    case FILTER_BY_CATEGORY:
      return{
        ...state,
        filterParams:[...state.filterParams, action.payload],
        // filterUniqueItems:state.filterParams.filter((item) => item !== action.payload)

      }
    default:
      return{
        ...state
      }
  }
}