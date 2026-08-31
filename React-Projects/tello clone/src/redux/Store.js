import { configureStore  } from '@reduxjs/toolkit'
import Taskes from './Taskes';

const Store = configureStore({
    reducer:{
        Taskes:Taskes
    }
})

export default Store
