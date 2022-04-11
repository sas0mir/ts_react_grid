import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

export interface RouterState extends CounterState{
    breadcrumb: Array<string>,
    path: string,
    route: string
}

const initialState: RouterState = {
  value: 0,
  breadcrumb: [],
  path: '',
  route: ''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('INC->', state.value, state);
      state.value += 1
    },
    decrement: (state) => {
        console.log('DEC->', state.value, state);
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const breadcrumbsSlice = createSlice({
    name: 'breadcrumb',
    initialState,
    reducers: {
        route_to: (state) => {
            //todo state.breadcramb
            //todo state.path
            //todo state.route
        },
        route_back: (state) => {
            //todo state.breadcramb
            //todo state.path
            //todo state.route
        }
    }
})
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { route_to, route_back } = breadcrumbsSlice.actions;

export default counterSlice.reducer