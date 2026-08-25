import { createSlice } from "@reduxjs/toolkit";
const SearchSlice = createSlice({
    name:'Search',
    initialState: { 
         query: '',
         result:[],

    },
    reducers:{
        setquery(state,action){
            state.query = action.payload;
        },
        setresult(state,action){
            state.result = action.payload;
        }
    }
})
export const {setquery,setresult} = SearchSlice.actions;
export default SearchSlice.reducer;