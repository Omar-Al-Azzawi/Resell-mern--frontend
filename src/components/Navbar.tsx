import React from 'react'
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const cartSize = useSelector((state: any) => state.cart)
    return (
        <nav className='flex justify-between bg-gray-200'>
            <div className='flex m-8 font-bold font-mono'>Resale</div>
            <div>
                <input className='m-8 px-4 py-1 border border-gray-400 rounded-md w-full' type="text" placeholder='Search...' />
            </div>
            <div>
                <ul className='flex m-4'>
                    <li className='p-4 hover:text-blue-300'>
                        <Link to="/">Home</Link> 
                    </li>
                    <li className='p-4 hover:text-blue-300'>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className='p-4 hover:text-blue-300'>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li className='p-5 mx-6 text-blue-600 hover:text-blue-300 flex'>
                      <Link to="/cart"><FiShoppingCart /></Link>
                      <span className='mx-2 '>{cartSize.cartItems.length}</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
