import React, { useState } from 'react'
import axios from 'axios'

export default function AddProduct() {
    const [user] = useState(JSON.parse(localStorage.getItem('user') || '{}'))
    const [userLocal] = useState(JSON.parse(localStorage.getItem('userLocal') || '{}'))
    const [creator] = useState(user.result?.googleId || userLocal?.data?.user?._id)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
        axios.post('http://localhost:3000/api/v1/products', {
            name,
            price,
            description,
            creator,
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
            <button className='border border-gray-400 h-15  m-1 p-2 rounded-md items-center bg-white hover:bg-blue-400 hover:text-white hover:shadow-2xl transition duration-300 ease-in-out' onClick={() => handleSubmit()}>Add Product</button>
        </div>
    )
}
