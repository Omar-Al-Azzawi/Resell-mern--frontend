import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { login } from "../../featurs/authSlice"


export default function Signup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const hundleClick = () => {
        navigate('/login')
    }
    const hundleSubmit = async () => {
        axios.post('http://localhost:3000/api/v1/users', {
            firstName,
            lastName,
            email,
            password
            })
            .then(res => {
                console.log(res)
                navigate('/login')
            })
            .catch(err => {
                console.log(err)
            })
            navigate('/login')
            alert('You have successfully signed up')
    }

    return (
           <div className='h-screen'>
               <div className='w-1/3 m-auto fixed inset-0' style={{height: '300px'}}>
                <h1 className='text-center text-blue-400 mb-4'>Sign up</h1> 
                <div className='mb-4'>
                    {/* <label>First name</label> */}
                    <input onChange={(e) => setFirstName(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="text" placeholder='First name..'/>
                </div>
                <div className='mb-4'>
                    {/* <label>Last name</label> */}
                    <input onChange={(e) => setLastName(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="text" placeholder='Last name..'/>
                </div>
                <div className='mb-4'>
                    {/* <label>Email</label> */}
                    <input onChange={(e) => setEmail(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="text" placeholder='Email..'/>
                </div>
                <div className='mb-4'>
                    {/* <label>Password</label> */}
                    <input onChange={(e) => setPassword(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="password" placeholder='Password..'/>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p>I already have one <span className='text-yellow-400 cursor-pointer hover:text-yellow-600 transition duration-300 ease-in-out' onClick={hundleClick}>Sign in</span></p>
                    </div>
                    <button className={`px-4 py-1.5 font-bold border border-gray-400 rounded-md hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out ${disabled ? 'bg-gray-400' : 'bg-white'}`} disabled={disabled} onClick={() => hundleSubmit()}>Sign up</button>
                </div>
              </div>
            </div>
    )
}


