import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import {persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {productApi} from "../api/product-api"
import { categoryApi } from "../api/category-api"


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
    reducer: {
        'products': persistedReducer,
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(productApi.middleware)
    .concat(categoryApi.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

