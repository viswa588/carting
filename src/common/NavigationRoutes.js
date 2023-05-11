import Home from "../components/Home";
import Products from "../components/Products";

export default [
    {path : '/', name: "Home", Component: <Home />},
    {path : '/products', name: "Products", Component: <Products />},
    // {path : '/mens', name: "Mens", Component: <Products />, subNav: [
    //     {path : '/mens/shirt', name: "Shirt", Component: <Products />},
    //     {path : '/mens/t-shirt', name: "T-Shirt", Component: <Products />},
    // ]},
    // {path : '/womens', name: "Womens", Component: <Products />},
    // {path : '/kids', name: "Kids", Component: <Products />},
]