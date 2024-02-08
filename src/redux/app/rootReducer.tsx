import { combineReducers } from "@reduxjs/toolkit";
import produts from "../slices/product-slice"
import basket from "../slices/basket-slice"


const rootReducer = combineReducers({
    produts,
    basket
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;