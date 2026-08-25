import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}
const Collection = createSlice({
    name:'Search',
    initialState,
    reducers:{
        setCollection(state,{payload}){
            let newcollection = [...state.items,payload]
            state.items = newcollection
            localStorage.setItem("collection",JSON.stringify(newcollection))
        }
    }
})
export const {setCollection} = Collection.actions;
export default Collection.reducer;