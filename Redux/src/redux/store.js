import { configureStore  } from '@reduxjs/toolkit'
import SearchSlice from './getdataSlice';
import Collection from './collection';

export const store = configureStore ({
    reducer:{
        search:SearchSlice,
        Collection:Collection
    },
});

export default store
