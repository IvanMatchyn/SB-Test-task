import { combineReducers } from '@reduxjs/toolkit';
import { testingSlice } from './slices/dashboard.slice.ts';

export const rootReducer = combineReducers({
  [testingSlice.name]: testingSlice.reducer,
});

