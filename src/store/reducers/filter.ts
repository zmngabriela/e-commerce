import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type FilterState = {
  term?: string
  category: number
}

const initialState = {
  term: '',
  category: 0
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    updateFilter: (state, action: PayloadAction<FilterState>) => {
      state.category = action.payload.category
    }
  }
})

export const { updateTerm, updateFilter } = filterSlice.actions
export default filterSlice.reducer

