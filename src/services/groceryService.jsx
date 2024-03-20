import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const getAllProduct = createApi({
    reducerPath: 'getallproduct',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    tagTypes: ['Productstype'],
    endpoints: (builder) => ({
        getallproduct: builder.query({
          providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Productstype', id:123 })), 'Productstype']
            : ['Productstype'],
    
        
        query: () => {
            return {
                url:"/products",
                method: 'GET',
            }
        },
      }),
      addnewproduct: builder.mutation({
        invalidatesTags: ["Productstype"],
        query: (newobj) => {
            return {
                url:"/products/add",
                method: 'POST',
                body: newobj,
            }
        },
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetallproductQuery,useAddnewproductMutation } = getAllProduct