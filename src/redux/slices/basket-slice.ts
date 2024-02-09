import { createSlice } from "@reduxjs/toolkit"
import {basketState} from "../../interface/data"


const initialState:basketState = {
    basket: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
    totalDiscountPrice: 0,
}


const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        
    }
})

export default basketSlice.reducer