import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com"
    }),
    endpoints: (build) => ({
        GetCategory: build.query({
            query: () => '/products/categories'
        })
    })
})

export const {useGetCategoryQuery} = categoryApi


