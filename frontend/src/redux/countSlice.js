import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 count:0
};

export const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incCount: (state, action) => {
      state.count = state.count + 1;
      console.log(state.count);
    },
    decCount: (state, action) => {
        if(state.count > 0){
            state.count = state.count - 1;
            console.log(state.count);
        }
    },
    resetCount:(state, action) =>{
        state.count = 0;
        console.log(state.count);
    }
  },
});

// Action creators are generated for each case reducer function
export const { incCount, decCount,resetCount } = countSlice.actions;

export default countSlice.reducer;
