import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

import  { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { MdEditNote } from 'react-icons/md'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

import { addItem } from '../../featurs/cartSlice'
import { updata } from '../../featurs/updataSlice'
import AddProduct from './AddProduct'
import Navbar from '../Navbar'


export default function Landing() {
    const [user] = useState(JSON.parse(localStorage.getItem('user') || '{}'))
    const [userLocal] = useState(JSON.parse(localStorage.getItem('userLocal') || '{}'))
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')

    const userId = user.result?.googleId || userLocal?.data?.user?._id;
    const dispatch = useDispatch()
    
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/products`)
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    }, [])

    const handleDelete = (id: any) => {
        axios.delete(`http://localhost:3000/api/v1/products/${id}`)
            window.location.reload()
    }

    const handleChange = useCallback(
        (e) => {
          setSearch(e.target.value)
        }, [])

    return (
            <section className='mb-20'>
                    <Navbar
                        placeholder='Search by the name...'
                        handleChange={handleChange}
                     />
                    <div className='mb-20'>
                     {user.result?.googleId || userLocal?.data?.user?._id ? <AddProduct /> : 
                         <div>
                            <h1 className='text-center text-2xl font-bold mt-10'>Welcome to the store</h1>
                            <p className='text-center text-gray-600'>Please login or register to add products</p>
                         </div>}
                    </div>
                    <div className="mt-10 mx-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                             {products.filter((val: any) => {
                                if(search === ''){
                                    return val
                                } else if (val.name.toLowerCase().includes(search.toLowerCase())){
                                    return val
                                }
                            }).map((product: any) => (<div key={product._id} className="group relative">
                          <div className="w-full h-90 p-2 bg-white rounded-xl border m-auto mb-10 hover:shadow-2xl transition duration-500 ease-in-out"  key={product._id}>
                            <img  src="https://image.shutterstock.com/image-vector/resale-concept-big-word-text-260nw-1513710023.jpg" alt={product.name} className="w-70 h-30 py-10 m-auto object-contain rounded-t-xl border border-gray-200" />
                            <div className='p-2'>
                                 <h3 className='font-bold text-lg pb-4'>{product.name}</h3>
                                 <p className='text-sm text-gray-600'>{product.price}€</p>
                                 <p className='text-sm text-gray-600'>{product.description.slice(0, 20)}...</p>
                            </div>
                              <button className='m-2 bg-green-100 py-1 px-2 rounded-md hover:bg-green-200' onClick={() => dispatch(addItem(product))}><MdOutlineAddShoppingCart /></button>
                                {user.result?.googleId === product.creator || userLocal?.data?.user?._id === product.creator ? <><button className='m-2 py-1 px-2 rounded-md hover:text-red-600' onClick={() => handleDelete(product._id)}><MdDelete /></button>
                              <button className=' rounded-md hover:text-yellow-500 text-l' onClick={() => dispatch(updata(product))}>
                                <Link to={`/products/${product._id}`}> 
                                   <MdEditNote />
                                </Link>
                              </button></> : null}
                            </div>
                            </div>
                        ))}
                    </div>
            </section>
    )
}
