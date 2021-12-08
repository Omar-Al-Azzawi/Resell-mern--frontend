import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FcGoogle } from 'react-icons/fc'
import { login }  from '../../featurs/authSlice'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignup, setIsSignp] = useState(false)
    const dispatch = useDispatch()


    let navigate = useNavigate();

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
        <div className="login-container h-screen">
            <div className='w-1/3 m-auto fixed inset-0' style={{height: '300px'}} >
                <h1 className='text-center text-blue-400 mb-4'>Sign in</h1>
                <div className='mb-4'>
                {/*  <label>Username</label> */}
                    <input onChange={(e) => setEmail(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="text" placeholder='Email..'/>
                </div>
                <div className='mb-4'>
                    {/* <label>Password</label> */}
                    <input onChange={(e) => setPassword(e.target.value)} className='w-full p-3 py-2 border border-gray-400 rounded-md' type="password" placeholder='Password..'/>
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
        </div>
    )
}





