import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeItem } from '../../featurs/cartSlice'

export default function Cart() {
    const items = useSelector((state: any) => state.cart)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Cart</h2>
            <div className='flex flex-col'>
                {items.cartItems.map((item: any) => (
                    <div key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick={() => dispatch(removeItem(item))}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
