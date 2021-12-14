import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likes: []
};

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        addLike: (state: any, action: any) => {
            state.likes.push(action.payload);
            localStorage.setItem("likes", JSON.stringify(state.likes));
        }
    }
});

export const { addLike } = likeSlice.actions;
export default likeSlice.reducer;