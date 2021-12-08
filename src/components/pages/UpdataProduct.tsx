import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'


interface UpdataProps {
    updataHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function UpdataProduct(porps: any) {
    const [product, setProduct] = useState([])
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [description, setDescription] = React.useState('')

    const updata = useSelector((state: any) => state.updata)
    
    const navigate = useNavigate()


    const handleUpdata = async (_id: any) => {
        const data = {
            name,
            price,
            description
        }
        await axios.put(`http://localhost:3000/api/v1/products${_id}`, data)
        navigate('/')
        console.log("Update success")
    }
/* 
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/products`)
        .then(res => {
            setProduct(res.data)
        })
    }, []) */


    return (
        <div className='h-screen'>
            <div className='w-1/4 m-auto fixed inset-0' style={{height: '300px'}}>
                <h1 className='text-center text-blue-400 mb-4'>Updata Product</h1>
                <input className='w-full p-3 py-2 m-2 border border-gray-400 rounded-md bg-transparent' type="text" placeholder="name.." value={name} onChange={(e) => setName(e.target.value)} />
                <input className='w-full p-3 py-2 m-2 border border-gray-400 rounded-md bg-transparent' type="text" placeholder="price.." value={price} onChange={(e) => setPrice(e.target.value)} />
                <textarea className='w-full h-1/3 p-3 py-2 m-2 border border-gray-400 rounded-md bg-transparent'  placeholder="description.." value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className='px-4 py-1.5 ml-2 mt-2 font-bold bg-transparint border border-gray-400 rounded-md hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out' onClick={() => handleUpdata(updata._id)}>Updata</button>
            </div>
        </div>
    )
}
