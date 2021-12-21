import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { addItem } from '../../featurs/cartSlice'
import { removeLike } from '../../featurs/likeSlice'

export default function LikeProducts() {
    const likeProducts = useSelector((state: any) => state.like.likes)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className='h-screen'>
            <h1 className='text-center pt-8 text-2xl'>Liked list</h1>
            { likeProducts.length > 0 ? (
                <div className="-my-6 divide-y divide-gray-200 mt-10 m-20">
                    {likeProducts.map((product: any) => (
                        <div className='flex my-6 pt-4' key={product._id}>
                            <div className='flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden'>
                               <img  src="https://cdn5.vectorstock.com/i/thumb-large/20/44/reseller-rgb-color-icon-vector-34552044.jpg" alt={product.name} />
                            </div>    
                            <div className="w-full ml-4 flex-1 flex flex-col">
                            <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                    <a href={product.href}>{product.name}</a>
                                </h3>
                                <p className="ml-4">{product.price}€</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.description.slice(0, 150)}</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                                <div>
                                    <button className='text-base font-medium text-gray-900 hover:text-blue-400' onClick={() => dispatch(addItem(product))}>Add to cart</button>
                                </div>
                                <div className="flex">
                                    <button className="font-medium text-red-400 hover:text-red-700" onClick={() => dispatch(removeLike(product))}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                            </div>
                       </div>
                    ))}
                </div>
            ) : (
                <p className='text-center m-4 text-xl'>No products to show</p>
            )}
            <div>
                <button className='m-20 text-base font-medium text-gray-900 hover:text-blue-400' onClick={() => navigate('/')}>Back to home</button>
            </div>
        </div>
    )
}
