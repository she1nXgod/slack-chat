import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('token') || '',
  username: localStorage.getItem('username') || '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, { payload: token }) => {
      state.token = token
      localStorage.setItem('token', token)
    },
    setUsername: (state, { payload: username }) => {
      state.username = username
      localStorage.setItem('username', username)
    },
    logout: (state) => {
      state.token = ''
      localStorage.removeItem('token')
      localStorage.removeItem('username')
    },
  },
})

export const selectCurrentToken = state => state.auth.token
export const selectCurrentUsername = state => state.auth.username

export const { setToken, setUsername, logout } = authSlice.actions
export default authSlice.reducer
