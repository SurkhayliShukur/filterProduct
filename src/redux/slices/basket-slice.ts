import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { basketState, basketType } from "../../interface/data"
import { toast } from "react-toastify"


const initialState: basketState = {
    basket: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
}


const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<basketType>) => {
            const exist = state.basket.find((product) => product.id === action.payload.id)

            if (exist) {
                toast.info("Product is already in basket", {
                    autoClose: 1000,
                })
            }
            state.basket.push(action.payload)
            state.totalAmount++;
            state.totalPrice += Number(action.payload.price);
            toast.success("Product added successfully")

        }
    }
})
export const {addToBasket} = basketSlice.actions
export default basketSlice.reducer