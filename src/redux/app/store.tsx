import {configureStore} from "@reduxjs/toolkit"
import productSlice from "../slices/product-slice"
import {productApi} from "../api/product-api"


export const store = configureStore({
    reducer: {
        'products': productSlice,
        [productApi.reducerPath]: productApi.reducer
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

