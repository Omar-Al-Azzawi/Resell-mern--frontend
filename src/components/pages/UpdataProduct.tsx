import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'


export default function UpdataProduct() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const updata = useSelector((state: any) => state.updata.updataProduct)
    const navigate = useNavigate()

    const handleUpdata = async (id: any) => {
        const data = {
            name,
            price,
            description
        }
        await axios.put(`http://localhost:3000/api/v1/products/${id}`, data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        navigate('/')
        console.log("Update success")
    }


    return (
        <div className='h-screen'>
            <div className='w-1/4 m-auto fixed inset-0' style={{height: '300px'}}>
                <h1 className='text-center text-blue-400 mb-4'>Updata Product</h1>
                <input className='w-full p-3 py-2 m-2 border border-gray-400 rounded-md bg-transparent' type="text" placeholder={updata.name} value={name} onChange={(e) => setName(e.target.value)} />
                <input className='w-full p-3 py-2 m-2 border border-gray-400 rounded-md bg-transparent' type="text" placeholder={updata.price} value={price} onChange={(e) => setPrice(e.target.value)} />
                <textarea className='w-full h-1/3 p-3 py-2 m-2 border border-gray-400 rounded-md bg-transparent'  placeholder={updata.description} value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className='px-4 py-1.5 ml-2 mt-2 font-bold bg-transparint border border-gray-400 rounded-md hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out' onClick={() => handleUpdata(updata._id)}>Updata</button>
            </div>
        </div>
    )
}
