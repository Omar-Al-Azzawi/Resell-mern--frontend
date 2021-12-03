import React, { useState } from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FcGoogle } from 'react-icons/fc'
import { login }  from '../../featurs/authSlice'


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()


    let navigate = useNavigate();

    function handleClick() {
        navigate("/signup");
      }

      const googleSuccess = async (response: any) => {
        const result = response?.profileObj;
        const token = response?.tokenId;
        console.log(response);

        try {
          dispatch(login({ result, token }))
          navigate('/')
              } catch (error) {
                  console.log(error)
                }
        }

     const googleFailure = (error: any) => {
        console.log(error)
    }

     const handelSubmit = () => {
        
    }

    /* const googleId : string = (process.env.REACT_APP_GOOGLE_ID as string); */

    return (
        <div className='w-1/4 m-auto fixed inset-0' style={{height: '300px'}}>
            <h1 className='text-center text-blue-400 animate-bounce'>Sign in</h1>
            <div className='mb-4'>
                <label>Username</label>
                <input onChange={(e) => setUsername(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="text" placeholder='username..'/>
            </div>
            <div className='mb-4'>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="password" placeholder='Password'/>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <p>I don't have account <span className='text-yellow-400 cursor-pointer hover:text-blue-600' onClick={handleClick}>Sign up</span></p>
                </div>
                <button className='px-4 py-1.5 font-bold bg-blue-400 rounded-md hover:bg-blue-600 hover:text-white transition duration-500 ease-in-out' >Login</button>
            </div>
            <div>
            <GoogleLogin 
                clientId='67342742481-2hirgh71qcm75t07ln765p5kg9542qhs.apps.googleusercontent.com'
                render={renderProps => (
                    <button className='mt-4 flex items-start px-4 py-1.5 font-bold bg-gray-100 rounded-md hover:bg-gray-200 hover:text-white transition duration-500 ease-in-out' 
                    onClick={renderProps.onClick}
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





