import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { addOffer } from '../../featurs/offerSlice'

export default function Offer() {
    const [user] = useState(JSON.parse(localStorage.getItem('user') || '{}'))
    const [userLocal] = useState(JSON.parse(localStorage.getItem('userLocal') || '{}'))
    const [ post, setPost ] = useState(/* JSON.parse(localStorage.getItem('offers') || '{}') */[])
    const [ offer, setOffer ] = useState('')
    
    const userName = user.result?.name || userLocal?.data?.user?.firstName
    const offers = useSelector((state: any) => state.offers)
    console.log(offers, 'offers');

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/products`)
            .then(res => {
                console.log(res.data.name, 'res.data.offer');
                setPost(res.data)
            })
    }, [])

    const handleClick = () => {
        dispatch(addOffer(offer))
    }


    return (
        <section>
            <h1 className='text-xl mb-4'>Add your offer</h1>
            <p className='mb-4'></p>
            <div className='mb-4'>
               {/*  {post.map((post: any, index: any) => (
                    <p key={index}>{`${userName}: ${post}`}</p>
                ))} */}
            </div>
            <input className='border border-gray-400 px-2 rounded-l-md' type="text" placeholder='Enter your offer..' onChange={(e) => setOffer(e.target.value)}/>
            <button className='border border-gray-400 px-2 rounded-r-md hover:bg-blue-300 hover:text-white' onClick={handleClick}>Submit</button>
        </section>
    )
}
