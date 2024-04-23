import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  user: any;
  token: string | null;
}

// Define the initial state using that type
const initialState: CounterState = {
  user: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
    logOut: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
