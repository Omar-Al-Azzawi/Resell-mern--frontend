/* eslint-disable eqeqeq */
import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { addItem } from '../../featurs/cartSlice'
import Navbar from '../Navbar'


export default function Product() {
    const { id } = useParams();
    const [infos, setInfos] = useState([]);
    const[search, setSearch] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/products`)
            .then(res => {
/*                 console.log(res.data) */
                setInfos(res.data)
            })
    }, [])

    const handleChange = useCallback(
        (e) => {
          setSearch(e.target.value)
        }, [])

    return (
        <div className='h-screen'>
             <Navbar
                placeholder='Search by the name...'
                handleChange={handleChange}
              />
            {infos && infos.filter((info: any) => info._id == id).map((info: any) => {
                return (
                    <div key={info._id} className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                        <div className='col-span-2 m-40'>
                            <h1 className='text-4xl font-bold mb-4 '>{info.name}</h1>
                            <h1 className='text-l text-gray-500 mb-4'>{info.price}€</h1>
                            <h1 className='text-l text-gray-500 mb-10'>{info.description}</h1>
                            <div>
                            <button className='border border-gray-400 py-1 px-2 rounded-md hover:bg-blue-400 hover:text-white' onClick={() => dispatch(addItem(info))}>Add to cart</button>
                            <button className='border border-gray-400 py-1 px-2 mx-2 rounded-md hover:bg-blue-400 hover:text-white' onClick={() => navigate('/')}>Back to home</button>
                            </div>
                        </div>
                        <div>
                            <img 
                            src="https://cdn5.vectorstock.com/i/thumb-large/20/44/reseller-rgb-color-icon-vector-34552044.jpg"
                            alt={info.name}
                            className='border border-gray-400 rounded-lg mt-40'
                            />
                        </div>
                    </div>
                )
              }
            )}
        </div>
    )
}
