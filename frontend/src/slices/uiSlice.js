import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentChannel: '1',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentChannel: (state, { payload: id }) => {
      state.currentChannel = id;
    },
  },
});

export const selectCurrentChannel = (state) => state.ui.currentChannel;

export const { setCurrentChannel } = uiSlice.actions;
export default uiSlice.reducer;
