import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()

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

    
    return (
           <div className='w-1/4 m-auto fixed inset-0' style={{height: '300px'}}>
                {/* <h1 className='text-center text-blue-400 animate-bounce'>Sign up</h1> */}
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
                        <p>I already have one <span className='text-yellow-400 cursor-pointer hover:text-yellow-600' onClick={hundleClick}>Sign in</span></p>
                    </div>
                    <button className={`px-4 py-1.5 font-bold bg-blue-400 rounded-md hover:bg-blue-600 hover:text-white transition duration-500 ease-in-out ${disabled ? 'bg-gray-400' : 'bg-yellow-400'}`} disabled={disabled} onClick={() => hundleSubmit}>Sign up</button>
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

