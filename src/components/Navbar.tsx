import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi'
import { useLocation } from 'react-router';

import Logout from './Auth/Logout';

export default function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
    const cartSize = useSelector((state: any) => state.cart)
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    }, [location])


    console.log();
    return (
        <nav className='flex justify-between bg-gradient-to-b from-blue-500'>
            <div className='flex m-8 font-bold font-mono'>
                <img className='w-20' src="https://www.rsll.io/assets/images/resell-logo.png" alt="resale" />
            </div>
            <div>
                <input className='m-8 px-4 py-1 border placeholder-black border-black bg-transparent rounded-md w-full' type="text" placeholder='Search...' />
            </div>
            <div>
                <ul className='flex m-4'>
                    <li className='p-4 hover:text-gray-500 text-black font-bold'>
                        <Link to="/">Home</Link> 
                    </li>
                    <li className='p-4 text-gray-600'>
                        {user ? (
                            <div className='flex'>
                                <p className='mx-4'>{user?.result?.name}</p>
                                {user?.result?.name ? <Logout/> : <Link className='hover:text-black border border-black rounded-md px-3' to="/login">Login</Link>}
                            </div>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                    <li className='p-5 mx-6 hover:text-gray-500 flex text-black font-bold'>
                      <Link to="/cart"><FiShoppingCart /></Link>
                      <span className='mx-2 '>{cartSize.cartItems.length}</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}