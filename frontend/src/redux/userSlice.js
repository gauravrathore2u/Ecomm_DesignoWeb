import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  gender: "",
  age: "",
  phone: "",
  email: "",
  address: "",
  isAdmin: false,
  cart: [],
  wishlist: [],
  isEmailVarified: false,
  isMobileVarified: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload?.name;
      state.gender = action.payload?.gender;
      state.age = action.payload?.age;
      state.phone = action.payload?.phone;
      state.email = action.payload?.email;
      state.address = action.payload?.address;
      state.isAdmin = action.payload?.isAdmin;
      state.isMobileVarified = action.payload?.isMobileVarified;
      state.isEmailVarified = action.payload?.isEmailVarified;
      state.cart = action.payload.cart;
      state.wishlist = action.payload.wishlist;
    },
    unsetUser: (state, action) => {
      state.name = "";
      state.gender = "";
      state.age = "";
      state.phone = "";
      state.email = "";
      state.address = "";
      state.isAdmin = false;
      state.isMobileVarified = false;
      state.isEmailVarified = false;
      state.cart = [];
      state.wishlist = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
