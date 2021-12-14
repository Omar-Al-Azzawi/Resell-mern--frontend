import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

export default function Offer() {
    const [offer, setOffer] = useState('')
    const [user] = useState(JSON.parse(localStorage.getItem('user') || '{}'))
    const [userLocal] = useState(JSON.parse(localStorage.getItem('userLocal') || '{}'))
 
    const userName = user.result?.name || userLocal?.data?.user?.firstName
    const navigate = useNavigate()
    const updata = useSelector((state: any) => state.updata.updataProduct)

    const handleUpdata = async (id: any) => {
        const data = {
            offer: `${userName} offer ${offer}`
        }
        await axios.put(`http://localhost:3000/api/v1/products/${id}`, data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        console.log("Update success")
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
            <button className='border border-gray-400 px-2 rounded-r-md hover:bg-blue-400 hover:text-white' onClick={() => handleUpdata(updata._id)}>Submit</button>
        </section>
    )
}
