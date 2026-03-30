import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, { payload: token }) {
      state.token = token;
    },
  },
});

export const selectCurrentToken = (state) => state.auth.token;
export const { setToken } = authSlice.actions;
export default authSlice.reducer;
