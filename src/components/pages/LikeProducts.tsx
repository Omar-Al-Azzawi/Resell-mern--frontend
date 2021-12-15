import React from 'react'
import { useSelector } from 'react-redux'

export default function LikeProducts() {
    const likeProducts = useSelector((state: any) => state.like.likes)

     console.log(likeProducts)

    return (
        <div className='h-screen'>
            <h1>Like Products</h1>
            { likeProducts.length > 0 ? (
                <div className='flex flex-wrap justify-center'>
                    {likeProducts.map((product: any) => (
                        <div className='w-1/2 p-4' key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p> 
                       </div>
                    ))}
                </div>
            ) : (
                <p>No products to show</p>
            )}
        </div>
    )
}
