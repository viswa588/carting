import {LOGIN, ALL_PRODUCTS, ALL_PRODUCTS_ERROR, ALL_PRODUCTS_WAIT, ADD_ITEMS_TO_CART, INCREASE_QTY, DECREASE_QTY, ADD_TO_CART, CART_ITEM, CHANGE_QTY, ITEM_ADD_TO_CART, ITEM_REMOVE_TO_CART, ITEM_INCREASE, ITEM_DECREASE, ITEM_REMOVE_ALL, ALL_CATEGORIES, ALL_CATEGORIES_ERROR, ALL_CATEGORIES_WAIT, LOGIN_ERROR, LOGOUT, SIGNUP, SIGNUP_ERROR, SINGLE_PRODUCT, SINGLE_PRODUCT_LOADING, SINGLE_PRODUCT_ERROR, FILTER_BY_CATEGORY} from '../constant/ActionType';

import { toast } from "react-toastify";

export const LoginAction = (params) => {
  console.log(params, 'loginAction111111111111')
  return {
    type: LOGIN,
    payload: params,
  };
};

export const LoginAction1 = (params) => {
  console.log(params, 'loginAction')
  return {
    type: LOGIN,
    payload: params,
  };
};

export const LoginError = (params) => {
  console.log(params, 'loginActionError')
  return {
    type: LOGIN_ERROR,
    payload: params,
  };
};

export const SignUpAction = (params) => {
  return{
    type: SIGNUP,
    payload: params
  }
}
export const SignupError = (params) => {
  return{
    type:SIGNUP_ERROR,
    payload:params
  }
}


export const AllProductList = (params) => {
  return{
    type: ALL_PRODUCTS,
    payload:params
  }
}
export const AllProductError = (params) => {
  return{
    type: ALL_PRODUCTS_ERROR,
    payload:params
  }
}
export const AllProductWait = (params) => {
  return{
    type: ALL_PRODUCTS_WAIT,
    payload:params
  }
} 
export const AllCategories = (params) => {
  return{
    type:ALL_CATEGORIES,
    payload:params
  }
}
export const AllCategoriesError = (params) => {
  return{
    type:ALL_CATEGORIES_ERROR,
    payload:params
  }
}
export const AllCategoriesWait = (params) => {
  return{
    type:ALL_CATEGORIES_WAIT,
    payload:params
  }
}
export const SingleProductAction = (params) => {
  console.log(params, 'paramsparams')
  return{
    type:SINGLE_PRODUCT,
    payload:params
  }
}
export const SingleProductLoadingAction = (params) => {
  console.log(params, 'paramsparams')
  return{
    type:SINGLE_PRODUCT_LOADING,
    payload:params
  }
}
export const SingleProductErrorAction = (params) => {
  console.log(params, 'paramsparams')
  return{
    type:SINGLE_PRODUCT_ERROR,
    payload:params
  }
}
export const CategoriesFilter = (params) => {
  return{
    type:ALL_CATEGORIES,
    payload:params
  }
}
export const AllItems = (params) => {
  return{
    type:CART_ITEM,
    payload:params
  }
}
export const ItemAddToCart = (params) => {
  console.log(params, 'ItemAddToCartItemAddToCart')
  // toast.success('Item added to cart',{position: toast.POSITION.TOP_RIGHT});
  return{
    type: ITEM_ADD_TO_CART,
    payload:params
  }
}
export const ItemRemoveToCart = (params) => {
  // toast.error('Item removed from cart',{position: toast.POSITION.TOP_RIGHT});
  return{
    type: ITEM_REMOVE_TO_CART,
    payload:params,
  }
}
export const ItemIncrease = (params) => {
  console.log(params, 'ItemIncrease::')
  return{
    type:ITEM_INCREASE,
    payload:params
  }
}
export const ItemDecrease = (params) => {
  console.log(params, 'allProduct2')
  return{
    type:ITEM_DECREASE,
    payload:params
  }
}
export const RemoveAllItems = (params) => {
  return{
    type:ITEM_REMOVE_ALL,
    payload:params
  }
}
export const LogoutAction = (params) => {
  return{
    type:LOGOUT,
    payload:params
  }
}
export const FilterAction = (params) => {
  // console.log(params, 'filterActionfilterAction')
  return{
    type:FILTER_BY_CATEGORY,
    payload:params
  }
}