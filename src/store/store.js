
import {configureStore} from "@reduxjs/toolkit";
import ProductsReducer from "./reducers/productsReducer";


let reducer = {
    production: ProductsReducer
}


let store = configureStore({reducer})

window.store = store

export default store