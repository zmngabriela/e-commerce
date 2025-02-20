import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fakeApiCreateOrder } from "../../services/mockApi"

export type OrdersState = {
  orders: OrderAnswer[]
  isLoading: boolean
  error: string | null
}

const initialState: OrdersState = {
  orders: [],
  isLoading: false,
  error: null
}

export const createOrder = createAsyncThunk<OrderAnswer, Order>(
  'orders/createOrder',
  async (order: Order, { rejectWithValue }) => {
    try {
      const response = await fakeApiCreateOrder(order)
      return response
    } catch (error) {
      return rejectWithValue('Error to create order.')
    }
  }
)

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createOrder.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    .addCase(createOrder.fulfilled, (state, action: PayloadAction<OrderAnswer>) => {
      state.isLoading = false
      state.orders.push(action.payload)
    })
    .addCase(createOrder.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export default ordersSlice.reducer
