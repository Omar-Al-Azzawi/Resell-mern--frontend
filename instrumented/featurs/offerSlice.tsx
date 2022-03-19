import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    offers: [],
    loading: false,
    error: null,
};

const offerSlice = createSlice({
    name: "offers",
    initialState,
    reducers: {
        addOffer: (state: any, action: any) => {
            state.offers.push(action.payload);
            localStorage.setItem("offers", JSON.stringify(state.offers));
        }  
    }
});

export const { addOffer } = offerSlice.actions;
export default offerSlice.reducer;