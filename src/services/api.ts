import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

import { logOut, setCredentials } from '../store/reducers/auth'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.escuelajs.co/api/v1',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.credentials.access_token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error?.status === 401) {
      // try to get a new token
      const refreshResult = await baseQuery(
        {
          url: 'auth/refresh-token',
          method: 'POST',
          body: {
            refreshToken: (api.getState() as RootState).auth.credentials.refresh_token
          }
        },
        api,
        extraOptions
      )
      if (refreshResult.data) {
        api.dispatch(setCredentials(refreshResult.data as Auth))
        // retry the initial query
        result = await baseQuery(args, api, extraOptions)
      } else {
        api.dispatch(logOut())
      }
    }
    return result
}

const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], ProductFilters>({
      query: (filters) => {
        const params: { [key: string]: any } = {}
        if (filters.limit) {
          params.limit = filters.limit
          params.offset = filters.offset
        }
        if (filters.title) params.title = filters.title
        if (filters.price_min) params.price_min = filters.price_min
        if (filters.price_max) params.price_max = filters.price_max
        if (filters.categoryId) params.categoryId = filters.categoryId
        const query = new URLSearchParams(params).toString()
        return `products?${query}`
      }
    }),
    getProduct: builder.query<Product, string>({
      query: (id) => `products/${id}`
    }),
    getCategories: builder.query<Category[], void>({
      query: () => 'categories'
    }),
    getUsers: builder.query<User[], void>({
      query: () => 'users'
    }),
    addUser: builder.mutation<any, NewUser>({
      query: (addUser) => ({
        url: 'users',
        method: 'POST',
        body: addUser
      })
    }),
    updateUser: builder.mutation<any, any>({
      query: ({id, changes}) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: changes
      })
    }),
    loginUser: builder.mutation<Auth, Login>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials
      })
    }),
    getUserSession: builder.query<MyProfile, void>({
      query: () => 'auth/profile'
    })
  })
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useLoginUserMutation,
  useGetUserSessionQuery
} = api

export default api

