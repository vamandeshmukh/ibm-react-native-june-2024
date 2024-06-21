// UserSlice.js

import { createSlice } from "@reduxjs/toolkit";

console.log('UserSlice');

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        loggedInUser: {
            username: '',
            password: '',
            name: '',
            phone: '',
            email: '',
            avatar: ''
        }
    },
    reducers: {
        userRegister: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.loggedInUser = action.payload;
        },

        userLogin: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.loggedInUser = action.payload;
        },
        userUpdate: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.loggedInUser = action.payload;
        },
        userLogout: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.loggedInUser = '';
        }
    }
});
export default UserSlice.reducer;
export const { userLogin, userLogout, userRegister, userUpdate } = UserSlice.actions;
