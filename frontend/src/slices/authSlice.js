import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, { payload: token }) => {
      state.token = token;
    },
    logout: (state) => {
      state.token = '';
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    },
  },
});

export const selectCurrentToken = (state) => state.auth.token;
export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
