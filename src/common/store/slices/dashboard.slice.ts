import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IinitialTestingState } from '../models/store.types.ts';

export const initialTestingState: IinitialTestingState = {
  phoneNumber: '966556963909',
};

export const testingSlice = createSlice({
  name: 'testing',
  initialState: initialTestingState,
  reducers: {
    setTestingUserId: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setTestingUserId } = testingSlice.actions;
