import React from 'react'
import { useSelector } from 'react-redux'

export default function LikeProducts() {
    const likeProducts = useSelector((state: any) => state.like)

     console.log(likeProducts)

    return (
        <div className='h-screen'>
            <h1>Like Products</h1>
            <ul>
               {/*  {likeProducts.map((product: any) => void (
                    <li key={product._id}>{product.title}</li>
                ))} */}
            </ul>
        </div>
    )
}
