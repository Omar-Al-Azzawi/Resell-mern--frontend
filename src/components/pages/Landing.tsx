import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  { useDispatch } from 'react-redux'
import { FaPencilAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { addItem } from '../../featurs/cartSlice'

import AddProduct from './AddProduct'
import { userInfo } from 'os'


export default function Landing() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/products')
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    }, [])

    const handleDelete = (id: any) => {
        axios.delete(`http://localhost:3000/api/v1/products/${id}`)
            window.location.reload()
    }


    return (
            <section>
                    <div className='h-10'>
                     {user.result?.googleId ? <AddProduct /> : 
                         <div>
                            <h1 className='text-center text-2xl font-bold mt-10'>Welcome to the store</h1>
                            <p className='text-center text-gray-600'>Please login or register to add products</p>
                         </div>}
                    </div>
                        <div className='grid grid-cols-4 gap-4 mt-20 mx-20'>
                        {products/* .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            }) */.map((product: any) => (
                            <div className="w-full h-60 p-2 bg-white rounded-xl border m-auto mb-10 hover:shadow-2xl" key={product._id}>
                                <img src="https://image.shutterstock.com/image-vector/resale-concept-big-word-text-260nw-1513710023.jpg" alt={product.name} className="w-40 m-auto object-contain rounded-xl" />
                                <div className='p-2'>
                                    <h3 className='font-bold text-lg'>{product.name}</h3>
                                    <p className='text-sm text-gray-600'>{product.price}€</p>
                                    <p className='text-sm text-gray-600'>{product.description.slice(0, 25)}</p>
                                </div>
                                <button className='m-2 bg-green-100 py-1 px-2 rounded-md hover:bg-green-200' onClick={() => dispatch(addItem(product))}>Add to cart</button>
                                {user.result?.googleId ? <><button className='m-2 py-1 px-2 rounded-md hover:text-red-600' onClick={() => handleDelete(product._id)}><MdDelete /></button>
                                <button className='m-1 py-2 px-2 rounded-md hover:text-yellow-500'>
                                   <Link to={`/products/${product._id}`}> 
                                     <FaPencilAlt />
                                   </Link>
                                </button></> : null}
                            </div>
                        ))}
                    </div>
            </section>
    )
}
