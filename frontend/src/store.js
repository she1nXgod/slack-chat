import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice.js'
import channelsReducer from './slices/channelsSlice.js'
import { chatApi } from './api/chatApi.js'

export default configureStore({
  reducer: {
    auth: authReducer,
    ui: channelsReducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(chatApi.middleware),
})
