import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'

import { login } from "../../featurs/authSlice"
import {FcGoogle } from 'react-icons/fc'



export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (password === confirmpassword) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [password, confirmpassword])


    const hundleClick = () => {
        navigate('/login')
    }
    const hundleSubmit = async () => {
        axios.post('http://localhost:3000/api/v1/users', {
            username,
            password
            })
            .then(res => {
                console.log(res)
                navigate('/login')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const googleSuccess = async (response: any) => {
        const result = response?.profileObj;
        const token = response?.tokenId;
        console.log(response);

        try {
          dispatch(login({ result, token }))
              } catch (error) {
                  console.log(error)
                }
        }

     const googleFailure = (error: any) => {
        console.log(error)
    }

    const googleId : string = (process.env.REACT_APP_GOOGLE_ID as string);
    
    return (
           <div className='w-1/4 m-auto fixed inset-0' style={{height: '300px'}}>
                <h1 className='text-center text-blue-400 animate-bounce'>Sign up</h1> 
                <div className='mb-4'>
                    <label>Username</label>
                    <input onChange={(e) => setUsername(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="text" placeholder='username..'/>
                </div>
                <div className='mb-4'>
                    <label>First name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="text" placeholder='first name..'/>
                </div>
                <div className='mb-4'>
                    <label>Last name</label>
                    <input onChange={(e) => setLastName(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="text" placeholder='last name..'/>
                </div>
                <div className='mb-4'>
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="password" placeholder='Password'/>
                </div>
                <div className='mb-4'>
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="text" placeholder='email'/>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p>I already have one <span className='text-yellow-400 cursor-pointer hover:text-yellow-600' onClick={hundleClick}>Sign in</span></p>
                    </div>
                    <button className={`px-4 py-1.5 font-bold bg-blue-400 rounded-md hover:bg-blue-600 hover:text-white transition duration-500 ease-in-out ${disabled ? 'bg-gray-400' : 'bg-yellow-400'}`} disabled={disabled} onClick={() => hundleSubmit}>Sign up</button>
                </div>
                <div>
                <GoogleLogin 
                clientId={googleId}
                render={renderProps => (
                    <button className='mt-4 flex items-start px-4 py-1.5 font-bold bg-gray-100 rounded-md hover:bg-gray-200 hover:text-white transition duration-500 ease-in-out' onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    ><FcGoogle /></button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
                />
                </div>
            </div>
    )
}




/* import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface signupProps {
    renderLogin: () => void;
}

export default function SignUp({renderLogin}: signupProps)  {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    const onSubmit = () => {
        axios.post('http://localhost:3001/signup', {
            username: username,
             password: password
            })
        .then(res => console.log(res))
    }
 
    useEffect(() => {
        if (password === confirmpassword) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [password, confirmpassword])


    return (
        <div style={{height: '300px'}}>
            <h1 className='text-center text-yellow-400 animate-bounce'>Sign up</h1>
            <div className='mb-4'>
                <label>Username</label>
                <input onChange={(e) => setUsername(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="text" placeholder='username..'/>
            </div>
            <div className='mb-4'>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="password" placeholder='Password'/>
            </div>
            <div className='mb-4'>
                <label>Confirm Password</label>
                <input onChange={(e) => setConfirmpassword(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="password" placeholder='Confirm Password'/>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <p>I already have one <span className='text-yellow-400 cursor-pointer hover:text-yellow-600' onClick={renderLogin}>Sign in</span></p>
                </div>
                <button className={`px-4 py-1.5 font-bold bg-yellow-400 rounded-md hover:bg-yellow-600 hover:text-white transition duration-500 ease-in-out ${disabled ? 'bg-gray-400' : 'bg-yellow-400'}`} disabled={disabled} onClick={() => onSubmit()}>Sign up</button>
            </div>
        </div>
    )
} */

