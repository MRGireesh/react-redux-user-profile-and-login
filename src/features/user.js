import { createSlice } from "@reduxjs/toolkit";

const name = "user";
const initialState = {value : { name : "" , age: 0 , email: "" }}
const reducer = {
    login: (state , action)=>{
        state.value = action.payload;
    }
}
const userSlice = createSlice(
    name,
    initialState,
    reducer

)