import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


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
               <div>
                    <img
                    className="mx-auto h-12 w-auto"
                    src="https://www.rsll.io/assets/images/resell-logo.png"
                    alt="reseal"
                    />
                    <h2 className="mb-4 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                </div>
                <div>
                    <input onChange={(e) => setFirstName(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="text" placeholder='First name..'/>
                </div>
                <div>
                    <input onChange={(e) => setLastName(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="text" placeholder='Last name..'/>
                </div>
                <div>
                    <input onChange={(e) => setEmail(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="text" placeholder='Email..'/>
                </div>
                <div>
                    <input onChange={(e) => setPassword(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="password" placeholder='Password..'/>
                </div>
                <div className='mt-6'>
                    <button className="group relative w-full flex justify-center mb-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"  onClick={() => hundleSubmit()}>Sign up</button>
                </div>
                <div>
                    <p>I already have one <span className='text-blue-400 cursor-pointer hover:text-blue-600 transition duration-300 ease-in-out' onClick={hundleClick}>Sign in</span></p>
                </div>
              </div>
            </div>
    )
}


