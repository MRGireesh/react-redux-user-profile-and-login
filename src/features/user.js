import { createSlice } from "@reduxjs/toolkit";

const name = "user";

const initialState = { value: { name: "", age: 0, email: "" } };
const reducers = {
  login: (state, action) => {
    state.value = action.payload;
  },

  logout: (state) => {
    state.value = initialState;
  },
};

export const userSlice = createSlice({
  name,
  initialState,
  reducers,
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
