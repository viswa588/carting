import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AddItemToCartReducer, AddToCartItemReducer, AllProductReducer, FilterReducer, getAllCategoriesReducer, ItemsAddToCart, LoginReducer, LogoutReducer, SignupReducer, SingleProductReducer} from '../reducer/Reducer';

const rootReducer = combineReducers({
  LoginStore: LoginReducer,
  SignUpStore: SignupReducer,
  AllProductStore: AllProductReducer,
  AddToCart : AddItemToCartReducer,
  ItemAddTOCart : ItemsAddToCart,
  getAllCategories: getAllCategoriesReducer,
  singleProduct:SingleProductReducer,
  filterParams:FilterReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
