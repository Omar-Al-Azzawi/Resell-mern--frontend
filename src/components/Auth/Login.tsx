import React, { useState } from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FcGoogle } from 'react-icons/fc'
import { login }  from '../../featurs/authSlice'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate();

    function handleClick() {
        navigate("/signup");
      }


        const googleSuccess = async (response: any) => {
            let res = await axios.post('http://localhost:3000/api/v1/users/google-auth',
            { id_token: response.tokenObj.id_token }
            );
            console.log(res, 'res with token');
      
              const result = response?.profileObj;
              const token = response?.tokenId;
              console.log(response);
              navigate('/')
              window.location.reload()
              try {
              dispatch(login({ result, token }))
              } catch (error) {
                  console.log(error)
              }
          }


     const googleFailure = (error: any) => {
        console.log(error)
    }

     const handelSubmit = async () => {

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

        console.log(email, password);

       await axios.post('http://localhost:3000/api/v1/users/login', {
            email,
            password
        }
        , config)
        .then(res => {
            console.log(res);
            localStorage.setItem('userLocal', JSON.stringify(res))
        }
        )
        navigate('/')
        window.location.reload()
    }

    /* const googleId : string = (process.env.REACT_APP_GOOGLE_ID as string); */

    return (
        <div className="h-screen min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://www.rsll.io/assets/images/resell-logo.png"
              alt="reseal"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handelSubmit()}
              >
                Sign in
              </button>
              <div className='w-full'>
                <GoogleLogin 
                    clientId='67342742481-c1qnv118lim23qllulc4ic2oeeoo74l6.apps.googleusercontent.com'
                    render={renderProps => (
                        <button className='w-full h-10 mt-4 flex items-start justify-center px-4 py-1.5 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-500 ease-in-out' 
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        >Login with Google <span className='mt-1 ml-2 text-xl'><FcGoogle /></span></button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className='ml-2'>I don't have account <span className='text-yellow-400 cursor-pointer hover:text-blue-600' onClick={() => handleClick()}>Sign up</span></p>
              </div>
            </div>
        </div>
      </div>
        /* <div className="login-container h-screen">
            <div className='w-1/3 m-auto fixed inset-0' style={{height: '300px'}} >
                <h1 className='text-center text-blue-400 mb-4'>Sign in</h1>
                <div className='mb-4'>
                    <input onChange={(e) => setEmail(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="text" placeholder='Email..'/>
                </div>
                <div className='mb-4'>
                    <input
                     onChange={(e) => setPassword(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md'
                     type="password"
                     placeholder='Password..'
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p>I don't have account <span className='text-yellow-400 cursor-pointer hover:text-blue-600' onClick={() => handleClick()}>Sign up</span></p>
                    </div>
                    <button className='px-4 py-1.5 font-bold text-gray-500 border border-gray-400 rounded-md hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out' onClick={() => handelSubmit()}>Login</button>
                </div>
                <div className='w-full'>
                <GoogleLogin 
                    clientId='67342742481-c1qnv118lim23qllulc4ic2oeeoo74l6.apps.googleusercontent.com'
                    render={renderProps => (
                        <button className='w-full h-10 mt-4 flex items-start justify-center px-4 py-1.5 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-500 ease-in-out' 
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        >Login with Google <span className='mt-1 ml-2 text-xl'><FcGoogle /></span></button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    />
                </div>
            </div>
        </div> */
    )
}





