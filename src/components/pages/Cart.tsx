import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { removeItem, cartTotal, clearCart } from '../../featurs/cartSlice'

export default function Cart() {
    const items = useSelector((state: any) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className='flex justify-between'>
          <div>
          <ul className="-my-6 divide-y divide-gray-200 mt-10 m-20">
                {items.cartItems.map((item: any) => (
                    <li key={item._id} className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src="https://image.shutterstock.com/image-vector/resale-concept-big-word-text-260nw-1513710023.jpg"
                        alt={item.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={item.href}>{item.name}</a>
                          </h3>
                          <p className="ml-4">{item.price}€</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {item.quantity} 1</p>

                        <div className="flex">
                          <button className="font-medium text-red-600 hover:text-indigo-500" onClick={() => dispatch(removeItem(item))}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div>
               {items.cartItems.length > 0 ? <button className='font-medium text-red-600 hover:text-indigo-500 m-20' onClick={() => dispatch(clearCart())}>Clear Cart</button> : <p className='text-center mt-20'>Cart is empty!</p>}
            </div>
          </div>
           {items.cartItems.length > 0 ? 
            <div className='mt-10 mr-10'>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      {/* <p>{items?.reduce((amount: any, item: any) => amount + item.price, 0)}</p> */}
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <button className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Checkout
                      </button>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="text-indigo-600 font-medium hover:text-indigo-500"
                          onClick={() => navigate('/')}
                        >
                          Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
            </div>
            : null
            }
        </div>
    )
}
