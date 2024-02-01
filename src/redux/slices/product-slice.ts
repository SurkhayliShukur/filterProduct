import { createSlice } from "@reduxjs/toolkit"
import {productTypes} from "../../interface/data"

const initialState :productTypes = {
    products: [
        {
            id: 0,
            title: "",
            price: "",
            description: "",
            category: "",
            image:"",
            rating: {
                rate: 0,
                count: 0
            }
        }
    ]
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
  

})
export default productSlice.reducer