import settings from "./settings";

let url = settings.api.url
export default {
    LOGIN: url + 'login',
    SIGNUP: url + 'signup',
    // ALLPRODUCTS: url + "products",
    ALLPRODUCTS: "https://nareshrajput-server.onrender.com/allproducts",
    ALLCATEGORY: url + "categories",
}