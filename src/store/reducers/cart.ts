import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CartItem = {
  product: Product
  selectedSize: string
}

type CartState = {
  items: CartItem[]
  cartOpen: boolean
}

const initialState: CartState = {
  items: [],
  cartOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      const { product, selectedSize } = action.payload
      state.items.push({ product, selectedSize })
    },
    removeProductCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      state.items = state.items.filter((item) => item.product.id !== product.id)
      if (state.items.length === 0) {
        state.cartOpen = false
      }
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
    },
    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.cartOpen = action.payload
    },
    cleanCart: (state) => {
      state.items = []
    },
  }
})

export const { addCart, removeProductCart, removeUnitCart, updateSize, setCartOpen, cleanCart } = cartSlice.actions
export default cartSlice.reducer
