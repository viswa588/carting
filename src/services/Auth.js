import { async } from "@firebase/util"
import { useDispatch } from "react-redux"
import { AllCategories, AllCategoriesError, AllProductError, AllProductList, AllProductWait, CategoriesFilter, LoginAction1, LoginError, SingleProduct, SingleProductAction, SingleProductErrorAction, SingleProductLoadingAction } from "../action/Action"
import { Store } from "../store/Store"
import { filterByCategoryProducts, getAllCategoriesService, getAllProductServices, getSingleProductServices, loginService } from "./Services"

const dispatch = Store.dispatch
export const login = async (params) => {
    const login = (data) => dispatch(LoginAction1(data))
    const loginError = (data) => dispatch(LoginError(data))
    loginService(params).then(res => {
        console.log(res, 'loginService')
        login(res)
        loginError(res.message)
    })
}
export const getAllProduct = async (params) => {
    const storeProduct = (data) => dispatch((AllProductList(data)))
    const storeProductError = (data) => dispatch((AllProductError(data)))
    const storeProductWait = (data) => dispatch((AllProductWait(data)))
    storeProductWait(true)
    await getAllProductServices(params).then(res => {
        console.log(res.data, 'res::::::::111')
        storeProduct(res.data)
        storeProductWait(false)
    }).catch((error) => {
        storeProductError(error.message)
    })
}
export const getAllCategories = async () => {
    const allCategoriesError = (data) => dispatch(AllCategoriesError(data))
    const allCategories = (data) => dispatch(AllCategories(data))
    await getAllCategoriesService().then(res => {
        console.log(res, 'getAllCategoriesService')
        allCategories(res.data)
    })
}
export const getSingleProduct = async (params) => {
    const storeData = (data) => dispatch(SingleProductAction(data))
    const prouctLoading = (data) => dispatch(SingleProductLoadingAction(data))
    const productError = (data) => dispatch(SingleProductErrorAction(data))
    prouctLoading()
    console.log(prouctLoading(), 'SingleProductErrorAction123')
    try{
        await getSingleProductServices(params).then(res => {
            console.log(res.data[0],  'SingleProductSingleProduct')
            storeData(res.data[0])
            console.log(res.data, 'SingleProductErrorAction12')
        })
    }
    catch(error){
        productError(error)
        console.log(error, 'SingleProductErrorAction')
    }
}
export const getProductByfilter = async(params) => {
    const storeProductWait = (data) => dispatch((AllProductWait(data)))
    const storeProduct = (data) => dispatch((AllProductList(data)))
    const paramsList = params === undefined ? '' : `?${params}`
    storeProductWait(true)
    await filterByCategoryProducts(paramsList).then(res => {
        console.log(res, 'filterByCategoryProducts')
        storeProduct(res.data)
        storeProductWait(false)
    })
}