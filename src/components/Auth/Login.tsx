import React, { useState } from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FcGoogle } from 'react-icons/fc'
import { login }  from '../../featurs/authSlice'

const initialState = {
    email: '',
    password: ''
}

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState(initialState)
    const [isSignup, setIsSignp] = useState(false)
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
          window.location.reload()
          navigate('/')
              } catch (error) {
                  console.log(error)
                }
        }

     const googleFailure = (error: any) => {
        console.log(error)
    }

     const handelSubmit = () => {
        console.log(username, password);
        axios.post('http://localhost:3000/api/v1/users/login', {
            username,
            password
        })
        .then(res => {
            console.log(res);
            navigate('/')
        }
        )
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
                    <p>I don't have account <span className='text-yellow-400 cursor-pointer hover:text-blue-600' onClick={() => handleClick()}>Sign up</span></p>
                </div>
                <button className='px-4 py-1.5 font-bold text-gray-500 border border-gray-400 rounded-md hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out' onClick={() => handelSubmit()}>Login</button>
            </div>
            <div className='w-full'>
            <GoogleLogin 
                clientId='67342742481-c1qnv118lim23qllulc4ic2oeeoo74l6.apps.googleusercontent.com'
                render={renderProps => (
                    <button className='w-full h-10 mt-4 flex items-start justify-center px-4 py-1.5 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-500 ease-in-out' 
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    >Login with Google <span className='mt-1 ml-2 font-size-xl'><FcGoogle /></span></button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
                />
            </div>
        </div>
    )
}





