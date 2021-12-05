import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    isLoggedIn: false,
    user: null,
    authData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify({...action?.payload}));
            console.log(action.payload);
            return{
                ...state, 
                authData: action?.payload
            }
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            localStorage.removeItem("user");
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

