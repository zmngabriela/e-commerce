import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type NewsletterState = {
  newsletter: string[]
}

const initialState: NewsletterState = {
  newsletter: ['']
}

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {
    addNewsletter: (state, action: PayloadAction<string>) => {
      const itemFound = state.newsletter.some(item => item === action.payload)
      if (!itemFound && action.payload !== '') {
        state.newsletter.push(action.payload)
      }
    }
  }
})

export const { addNewsletter } = newsletterSlice.actions
export default newsletterSlice.reducer
