import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com/"
    }),
    endpoints: (builder) => ({
        GetProducts: builder.query(
            {
                query: () => ({
                    url: "products",
                    method: "GET"
                })
            }
        ),
        GetProductId: builder.query({
            query: (id) => ({
                url: "products/" + id,
                method: "GET"
            })
        })
    })

})

export const { useGetProductsQuery,useGetProductIdQuery } = productApi