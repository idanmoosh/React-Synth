import { configureStore } from '@reduxjs/toolkit';
import oscReducer from '../features/oscSlice.js';

export default configureStore({
  reducer: {
    counter: oscReducer,
  },
});
