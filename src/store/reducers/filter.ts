import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type FilterState = {
  term?: string
  category: number
  sortBy?: 'asc' | 'desc' | 'latest' | ''
  limit: number
  offset: number
  currentPage: number
  priceMin?: number
  priceMax?: number
  filterOpen: boolean
}

const initialState: FilterState = {
  term: '',
  category: 0,
  sortBy: '',
  limit: 8,
  offset: 0,
  currentPage: 1,
  priceMin: undefined,
  priceMax: undefined,
  filterOpen: false
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload
    },
    setSortBy: (state, action: PayloadAction<'asc' | 'desc'| 'latest' | ''>) => {
      state.sortBy = action.payload
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setPriceMin: (state, action: PayloadAction<number>) => {
      state.priceMin = action.payload
    },
    setPriceMax: (state, action: PayloadAction<number>) => {
      state.priceMax = action.payload
    },
    setFilterOpen: (state, action: PayloadAction<boolean>) => {
      state.filterOpen = action.payload
    }
  }
})

export const { setTerm, setCategory, setSortBy, setLimit, setOffset, setCurrentPage, setPriceMin, setPriceMax, setFilterOpen } = filterSlice.actions
export default filterSlice.reducer

