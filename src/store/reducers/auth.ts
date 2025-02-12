import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type AuthState = {
  credentials: Auth
}

const initialState: AuthState = {
  credentials: {
    access_token: '',
    refresh_token: ''
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<Auth>) => {
      state.credentials = action.payload
    },
    logOut: (state) => {
      state.credentials = {
        access_token: '',
        refresh_token: ''
      }
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
