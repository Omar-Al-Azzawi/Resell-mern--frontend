import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]')
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cartItems.push(action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeItem: (state, action) => {
            const nextCartItem =  state.cartItems.filter((cartItem: any) => cartItem.name !== action.payload.name);
            state.cartItems = nextCartItem
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        }  
    }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer