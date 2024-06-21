// Store.js

import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice';

console.log('store');
const store = configureStore({
    reducer: {
        user: UserReducer,
        // other: OtherReducer 
    }
});

export default store;

