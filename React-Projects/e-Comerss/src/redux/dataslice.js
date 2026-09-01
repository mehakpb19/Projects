import { createSlice } from "@reduxjs/toolkit";

const dataslice = createSlice({
    name:'data',
    initialState:{data:[]},
    reducers:{
        setdata(state,{payload}){
            state.data = payload
            
        }
    }
})

export const {setdata} = dataslice.actions
export default dataslice.reducer