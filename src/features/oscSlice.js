import { createSlice } from '@reduxjs/toolkit';

export const oscSlice = createSlice({
  name: 'osc',
  initialState: {
    wave: 'sine',
    duration: 0.1,
    distortion: 0,
  },
  reducers: {
    setWave: (state, action) => {
      state.wave = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setDistortion: (state, action) => {
      state.distortion = action.payload;
    },
  },
});

export const selectWave = state => {
  return state.wave;
};

export const selectDuration = state => {
  return state.duration;
};
export const selectDistortion = state => {
  return state.distortion;
};

export const { setWave, setDuration, setDistortion } = oscSlice.actions;
export default oscSlice.reducer;
