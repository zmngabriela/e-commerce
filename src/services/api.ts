import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ProductFilters {
  categoryId?: number
  price_min?: number
  price_max?: number
  title?: string
  limit?: number
  offset?: number
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.escuelajs.co/api/v1'
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], ProductFilters>({
      query: (filters) => {
        const params: { [key: string]: any } = {}

        if (filters.title) params.title = filters.title
        if (filters.price_min) params.price_min = filters.price_min
        if (filters.price_max) params.price_max = filters.price_max
        if (filters.categoryId) params.categoryId = filters.categoryId
        if (filters.limit) params.limit = filters.limit
        if (filters.offset) params.offset = filters.offset

        const query = new URLSearchParams(params).toString()

        return `products/?${query}`
      }
    }),
    getProduct: builder.query<Product, string>({
      query: (id) => `products/${id}`
    }),
    getCategories: builder.query<Category[], void>({
      query: () => 'categories'
    }),
    postOrder: builder.mutation<any, Order>({
      query: (order) => ({
        url: 'orders',
        method: 'POST',
        body: order
      })
    })
  })
})

export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery, usePostOrderMutation } = api

export default api
