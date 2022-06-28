import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NavState {
  current: string,
  prev: string,
  history: string[]
}

const initialState: NavState = {
  current: '/main',
  prev: '/main',
  history: ['/main'],
}

export const navigationSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    goto: (state:NavState, action: PayloadAction<NavState>) => {
      state.current = action.payload.current;
      state.prev = action.payload.prev;
      state.history = action.payload.history;
    },
    goback: (state:NavState, action: PayloadAction<NavState>) => {
      //state = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { goto, goback } = navigationSlice.actions;

export default navigationSlice.reducer