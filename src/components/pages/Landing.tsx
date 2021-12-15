/* eslint-disable array-callback-return */
import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import  { useDispatch, useSelector } from 'react-redux'
import ReactLoading from "react-loading";

import Navbar from '../Navbar'
import AddProduct from './AddProduct'
import { addItem } from '../../featurs/cartSlice'
import { updata } from '../../featurs/updataSlice'
import { addLike, removeLike } from '../../featurs/likeSlice'

import { 
    MdDelete,
    MdOutlineReadMore,
    MdEditNote,
    MdOutlineAddShoppingCart
 } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import { BsSuitHeartFill } from 'react-icons/bs'


export default function Landing() {
    const [user] = useState(JSON.parse(localStorage.getItem('user') || '{}'))
    const [userLocal] = useState(JSON.parse(localStorage.getItem('userLocal') || '{}'))
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const [like, setLike] = useState(false)

    const userId = user.result?.googleId || userLocal?.data?.user?._id;
    const likeProduct = useSelector((state: any) => state.like.likes)

    const dispatch = useDispatch()
    
    useEffect(() => {
        setTimeout(() => {
            axios.get(`http://localhost:3000/api/v1/products`)
            .then(res => {
                setProducts(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            }
            )
        }, 1500)
    }, [])

    const handleDelete = (id: any) => {
        axios.delete(`http://localhost:3000/api/v1/products/${id}`)
            window.location.reload()
    }

    const handleChange = useCallback(
        (e) => {
          setSearch(e.target.value)
        }, [])

     function existLike(id: any) {
        return likeProduct.find((item: any) => item.name === id.name)
    } 


    const handleLike = (id: any) => {
        if(existLike(id)) {
            dispatch(removeLike(id))
            setLike(false)
        } else {
            dispatch(addLike(id))
            setLike(true)
        } 
        console.log(likeProduct, 'likes');
    }

    return (
            <section className='mb-20 h-full min-h-screen'>
                    <Navbar
                        placeholder='Search by the name...'
                        handleChange={handleChange}
                     />
                    <div className='mb-20'>
                     {userId ? <AddProduct /> : 
                         <div>
                            <h1 className='text-center text-2xl font-bold mt-10'>Welcome to the store</h1>
                            <p className='text-center text-gray-600'>Please login or register to add products</p>
                         </div>}
                    </div>
                    {loading ? <ReactLoading className='m-auto' type='bubbles' color='#000' height={100} width={100} /> : 
                            <div className="mt-10 mx-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.filter((val: any) => {
                            if(search === ''){
                                return val
                            } else if (val.name.toLowerCase().includes(search.toLowerCase())){
                                return val
                            }
                        }).map((product: any) => (<div key={product._id} className="group relative">
                        <div className="w-full h-90 p-2 bg-white rounded-xl border border-gray-600 m-auto mb-10 hover:shadow-2xl transition duration-500 ease-in-out relative"  key={product._id}>
                          <span onClick={() => handleLike(product)}>{existLike(product) ? <BsSuitHeartFill className='absolute right-4 top-4 cursor-pointer text-red-500'/> : <FiHeart className='absolute right-4 top-4 cursor-pointer'/>}</span>
                          <img  src={product.imgUrl || "https://cdn5.vectorstock.com/i/thumb-large/20/44/reseller-rgb-color-icon-vector-34552044.jpg"} alt={product.name} className="w-90 h-30 m-auto object-contain rounded-t-xl border-b-2 border-gray-200" />
                        <div className='p-2'>
                            <div className='flex justify-between'>
                                <h3 className='font-bold text-lg pb-4'>{product.name}</h3>
                                    <Link to={`product/${product._id}`}>
                                    <span><MdOutlineReadMore className='text-gray-600 text-2xl mr-3' /></span>
                                </Link>
                            </div>
                                <p className='text-sm text-gray-600'>{product.price}€</p>
                                <p className='text-sm text-gray-600'>{product.description.slice(0, 20)}...</p>
                        </div>
                            <button className='m-2 bg-green-100 py-1 px-2 rounded-md hover:bg-green-200' onClick={() => dispatch(addItem(product))}><MdOutlineAddShoppingCart /></button>
                            {userId === product.creator ? <><button className='m-2 py-1 px-2 rounded-md hover:text-red-600' onClick={() => handleDelete(product._id)}><MdDelete /></button>
                            <button className=' rounded-md hover:text-yellow-500 text-l' onClick={() => dispatch(updata(product))}>
                            <Link to={`/products/${product._id}`}> 
                                <MdEditNote />
                            </Link>
                            </button></> : null}
                        </div>
                        </div>
                    ))}
                </div>   
              }
            </section>
    )
}
