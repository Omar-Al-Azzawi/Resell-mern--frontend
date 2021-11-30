import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate();

    function handleClick() {
        navigate("/signup");
      }

    return (
        <div className='w-1/4 m-auto fixed inset-0' style={{height: '300px'}}>
            {/* <h1 className='text-center text-blue-400 animate-bounce'>Sign in</h1> */}
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
        </div>
    )
}




/* import React, { useState } from 'react'
import axios from 'axios'

interface loginProps {
    renderSignup: () => void;
}

export default function Signin({renderSignup}: loginProps)  {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        axios.post('http://localhost:3001/signin', {
            username: username,
             password: password
            })
        .then(res => {
            console.log(res)  
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
                window.location.href = '/dashboard'
            }
        })
    }

    return (
        <div className='' style={{height: '300px'}}>
            <h1 className='text-center text-yellow-400 animate-bounce'>Sign in</h1>
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
                    <p>I don't have account <span className='text-yellow-400 cursor-pointer hover:text-yellow-600' onClick={renderSignup}>Sign up</span></p>
                </div>
                <button className='px-4 py-1.5 font-bold bg-yellow-400 rounded-md hover:bg-yellow-600 hover:text-white transition duration-500 ease-in-out' onClick={() => onSubmit()}>Login</button>
            </div>
        </div>
    )
}
 */


