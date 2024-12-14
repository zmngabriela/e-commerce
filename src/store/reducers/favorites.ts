import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type FavoritesState = {
  favoritesList: Product[]
}

const initialState: FavoritesState = {
  favoritesList: []
}

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    favorite: (state, action: PayloadAction<Product>) => {
      const itemFound = state.favoritesList.some(item => item.id === action.payload.id)
      if (!itemFound) {
        state.favoritesList.push(action.payload)
      } else if (itemFound) {
        state.favoritesList = state.favoritesList.filter(item => item.id !== action.payload.id)
      }
    }
  }
})

export const { favorite } = favoriteSlice.actions
export default favoriteSlice.reducer
