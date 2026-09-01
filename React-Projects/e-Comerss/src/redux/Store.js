import { configureStore } from '@reduxjs/toolkit';
import dataslice from "./dataslice"
const store = configureStore({
    reducer:{
        data:dataslice
    }
})
export default store