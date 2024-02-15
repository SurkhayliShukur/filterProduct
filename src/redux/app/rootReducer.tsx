import { combineReducers } from "@reduxjs/toolkit";
import product from "../slices/product-slice"
import basket from "../slices/basket-slice"


const rootReducer = combineReducers({
    product,
    basket
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;