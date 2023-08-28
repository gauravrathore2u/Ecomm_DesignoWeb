import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 totalProd: [],
 sum:0
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    pushToCart: (state, action) => {
      state.totalProd = [...state.totalProd, action.payload];
      state.sum = state.sum + action.payload.price;
    },
    removeFromCart: (state, action)=>{
    // const indexToRemove = state.totalProd.indexOf(action.payload);
    debugger
    const indexToRemove = state.totalProd.findIndex((obj)=>obj._id === action.payload._id);
    if(indexToRemove !== -1){
        state.totalProd.splice(indexToRemove, 1);
        state.sum = state.sum - action.payload.price;
    }
    }
  },
});

// Action creators are generated for each case reducer function
export const { pushToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
