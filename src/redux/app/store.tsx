import {configureStore} from "@reduxjs/toolkit"
import productSlice from "../slices/product-slice"
import {productApi} from "../api/product-api"
import { categoryApi } from "../api/category-api"

//  PERSIST ƏLAVƏ EDƏCƏM BASKET ÜÇÜN
export const store = configureStore({
    reducer: {
        'products': productSlice,
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(productApi.middleware)
    .concat(categoryApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

