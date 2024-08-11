import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type CountStatus = 'pending...' | 'active' | 'inactive';

type CountState = {
  count: number;
  status: CountStatus;
};

const initialState: CountState = {
  count: 0,
  status: 'pending...',
};

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
      state.status = 'pending...';
    },
    setStatus: (state, action: PayloadAction<CountStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { increase, decrease, reset, setStatus } = counterSlice.actions;
export default counterSlice.reducer;
