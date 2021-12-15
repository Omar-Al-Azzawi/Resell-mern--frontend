import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import { useLocation } from 'react-router';

import Logout from './Auth/Logout';

export interface Props{
    placeholder: string
    handleChange: (input : React.ChangeEvent<HTMLInputElement>) => void, 
}

export default function Navbar(props: Props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
    const [userLocal] = useState(JSON.parse(localStorage.getItem('userLocal') || '{}'))
    const cartSize = useSelector((state: any) => state.cart)
    const likeProducts = useSelector((state: any) => state.like.likes)
    const location = useLocation();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    }, [location])

    return (
        <nav className='flex justify-between bg-gradient-to-b from-blue-600 '>
            <div className='flex m-8'>
                <img className='w-20' src="https://www.rsll.io/assets/images/resell-logo.png" alt="resale" />
            </div>
            <div>
                <input
                 className='m-8 px-4 py-1 border placeholder-gray-500 border-black bg-transparent rounded-md w-full'
                 type="text"
                 placeholder={props.placeholder}
                 onChange={props.handleChange}
                  />
            </div>
            <div>
                <ul className='flex m-4'>
                    <li className='p-4 hover:text-gray-500 text-black font-bold'>
                        <Link to="/">Home</Link> 
                    </li>
                    <li className='p-4 text-gray-600'>
                        {user ? (
                            <div className='flex'>
                            <p className='mx-4'>{user?.result?.name || userLocal?.data?.user?.firstName}</p>
                                {user?.result?.name || userLocal?.data?.user?.firstName ? <Logout/> : <Link className='hover:text-black border border-black rounded-md px-3' to="/login">Login</Link>}
                            </div>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                    <li className='p-5 mx-4 flex text-black font-bold'>
                        <Link to="/likeproducts">
                          <FiHeart className='mr-1 hover:text-gray-500' style={{ color: likeProducts.length > 0 ? 'red' : 'black'}}/>
                        </Link>
                          <span className='mr-4'>{likeProducts.length > 0 ? likeProducts.length : null}</span>
                      <Link to="/cart"><FiShoppingCart className='hover:text-gray-500'/></Link>
                      <span className='mx-2'>{cartSize.cartItems.length > 0 ? cartSize.cartItems.length : null}</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
