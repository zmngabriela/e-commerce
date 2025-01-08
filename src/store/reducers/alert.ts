import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type AlertState = {
  alertOpen: boolean
  title: string
  message: string
}

const initialState: AlertState = {
  alertOpen: false,
  title: '',
  message: ''
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertState>) => {
      state.alertOpen = action.payload.alertOpen
      state.title = action.payload.title
      state.message = action.payload.message
    }
  }
})

export const { setAlert } = alertSlice.actions
export default alertSlice.reducer
