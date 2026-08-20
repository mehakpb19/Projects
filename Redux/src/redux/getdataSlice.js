import { createSlice } from "@reduxjs/toolkit";

const getdataSlice= createSlice({
    name: "getdataSlice",
    initialState: {value:0
    },
    reducers: {
    },
       
})

export const { GetdatabyKeyword } = getdataSlice.actions
export default getdataSlice.reducer