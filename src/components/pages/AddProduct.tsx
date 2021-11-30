import React, { useState } from 'react'
import axios from 'axios'

export default function AddProduct() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
        axios.post('http://localhost:3000/api/v1/products', {
            name,
            price,
            description
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            window.location.reload();
    }


    return (
        <div className='flex flex-grow m-5'>
            <input className='border border-gray-400 h-15 m-1 p-2 rounded-md' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='product name..'/>
            <input className='border border-gray-400 h-15  m-1 p-2 rounded-md' type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='price..'/>
            <input className='border border-gray-400 h-15 m-1 p-2 rounded-md flex-grow' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description..'/>
            <button className='border border-gray-400 h-15  m-1 p-2 rounded-md items-center bg-red-200 hover:bg-red-400' onClick={() => handleSubmit()}>Add Product</button>
        </div>
    )
}
