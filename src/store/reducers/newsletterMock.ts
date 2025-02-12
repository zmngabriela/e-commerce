import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type NewsletterState = {
  newsletterList: string[]
}

const initialState: NewsletterState = {
  newsletterList: ['']
}

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {
    addNewsletter: (state, action: PayloadAction<string>) => {
      const itemFound = state.newsletterList.some(item => item === action.payload)
      if (!itemFound && action.payload !== '') {
        state.newsletterList.push(action.payload)
      }
    },
    removeNewsletter: (state, action: PayloadAction<string>) => {
      state.newsletterList = state.newsletterList.filter(item => item !== action.payload)
    }
  }
})

export const { addNewsletter, removeNewsletter } = newsletterSlice.actions
export default newsletterSlice.reducer
