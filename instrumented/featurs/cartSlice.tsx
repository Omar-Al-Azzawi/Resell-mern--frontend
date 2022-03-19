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
        },
        clearCart: (state) => {
            state.cartItems = []
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        cartTotal: (state) => {
            const total = state.cartItems.reduce((acc: any, cartItem: any) => acc + cartItem.price, 0)
            return total
        }  
    }
})

export const { addItem, removeItem, clearCart, cartTotal } = cartSlice.actions
export default cartSlice.reducer