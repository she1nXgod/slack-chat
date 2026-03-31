import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import { chatApi } from './api/chatApi.js';

export default configureStore({
  reducer: {
    auth: authReducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatApi.middleware),
});
