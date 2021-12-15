import React from 'react'
import { useSelector } from 'react-redux'

export default function LikeProducts() {
    const likeProducts = useSelector((state: any) => state.like.likes)

     console.log(likeProducts)

    return (
        <div className='h-screen '>
            { likeProducts.length > 0 ? (
                <div className="-my-6 divide-y divide-gray-200 mt-10 m-20">
                    {likeProducts.map((product: any) => (
                        <div className='flex my-6 py-4' key={product.id}>
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
                                <p className="mt-1 text-sm text-gray-500">{product.description.slice(0, 80)}</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                                <div>
                                    <button className='text-base font-medium text-gray-900'>Add to cart</button>
                                </div>
                                <div className="flex">
                                    <button className="font-medium text-red-400 hover:text-red-700" /* onClick={() => dispatch(removeItem(item))} */>
                                        Remove
                                    </button>
                                </div>
                            </div>
                            </div>
                       </div>
                    ))}
                </div>
            ) : (
                <p>No products to show</p>
            )}
        </div>
    )
}
