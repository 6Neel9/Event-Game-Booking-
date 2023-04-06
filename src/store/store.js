import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import cartReducer from './cartSlice'



const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: productReducer,
    }
})


// export type RootState = ReturnType<typeof store.getState>;
export default store;