import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CartItem = {
  product: Product
  selectedSize: string
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      const { product, selectedSize } = action.payload
      state.items.push({ product, selectedSize })
    },
    removeCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      state.items = state.items.filter((item) => item.product.id !== product.id)
    },
    removeUnitCart: (state, action: PayloadAction<CartItem>) => {
      const { product, selectedSize } = action.payload
      const index = state.items.findIndex((item => (
        item.product.id === product.id && item.selectedSize === selectedSize
      )))
      if (index !== -1) {
        state.items.splice(index, 1)
      }
    },
    updateSize: (state, action: PayloadAction<CartItem>) => {
      const { product, selectedSize } = action.payload
      const productFound = state.items.find((item) => (
        product === action.payload.product && item.selectedSize !== selectedSize
      ))
      if (productFound) {
        productFound.selectedSize = action.payload.selectedSize
      }
    }
  }
})

export const { addCart, removeCart, removeUnitCart, updateSize } = cartSlice.actions
export default cartSlice.reducer
