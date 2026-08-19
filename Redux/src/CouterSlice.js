import { createSlice } from "@reduxjs/toolkit";
export const CounterSlice = createSlice({
    name:'Counter',
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        discrement:(state)=>{
            state.value -=1
        },amount:(state,action)=>{
            state.value +=action.payload;

        }
    }
})
export const {increment,discrement,amount} = CounterSlice.actions;
export default CounterSlice.reducer