import { createSlice } from '@reduxjs/toolkit'
import { DEFAULT_CHANNEL_ID } from '../constants'

const initialState = {
  currentChannel: DEFAULT_CHANNEL_ID,
}

const channelsSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentChannel: (state, { payload: id }) => {
      state.currentChannel = id
    },
  },
})

export const selectCurrentChannel = state => state.ui.currentChannel

export const { setCurrentChannel } = channelsSlice.actions
export default channelsSlice.reducer
