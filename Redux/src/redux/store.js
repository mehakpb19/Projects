import { configureStore } from '@reduxjs/toolkit';
import getdataSlice from './getdataSlice';


export const store = configureStore({
    reducer:{
        data:getdataSlice,
    },
})

export default store