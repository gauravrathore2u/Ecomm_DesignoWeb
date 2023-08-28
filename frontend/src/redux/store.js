import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import countSliceReducer from './countSlice'
import cartSliceReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: countSliceReducer,
    cart: cartSliceReducer
  },
})