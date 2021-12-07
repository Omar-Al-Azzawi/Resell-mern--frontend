import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

export default function UpdataProduct() {
    const [products, setProducts] = useState([])
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [description, setDescription] = React.useState('')
    
    const navigate = useNavigate()

    const handleUpdata = async (id: any) => {
        const data = {
            name,
            price,
            description
        }
        await axios.put(`http://localhost:3000/api/v1/products/${id}`, data)
        navigate('/')
        console.log("Update success");
        alert("Updata success")
    }
    /* const handleUpdata = () => {
        console.log("Update success");
    } */

/*     useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/products`)
        .then(res => {
            setName(res.data.name)
            setPrice(res.data.price)
            setDescription(res.data.description) 
        })
    }, []) */


    return (
        <div className='h-screen'>
            <div className='w-1/4 m-auto fixed inset-0' style={{height: '300px'}}>
                <h1 className='text-center text-blue-400 animate-bounce'>Updata Product</h1>
                <input className='w-full p-3 py-2 m-2 border border-gray-400 rounded-md' type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input className='w-full p-3 py-2 m-2 border border-gray-400 rounded-md' type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <textarea className='w-full p-3 py-2 m-2 border border-gray-400 rounded-md'  placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className='px-4 py-1.5 ml-2 mt-2 font-bold bg-transparint border border-gray-400 rounded-md hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out' onClick={() => handleUpdata}>Updata</button>
            </div>
        </div>
    )
}
