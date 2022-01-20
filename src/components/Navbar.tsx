import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FaSellcast } from 'react-icons/fa'
import { useLocation } from 'react-router';

import Logout from './Auth/Logout';
import "./Navbar.css";

export interface Props{
    placeholder: string
    handleChange: (input : React.ChangeEvent<HTMLInputElement>) => void, 
}

export default function Navbar(props: Props) {
    const [toggle, setToggle] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
    const [userLocal] = useState(JSON.parse(localStorage.getItem('userLocal') || '{}'))
    const cartSize = useSelector((state: any) => state.cart)
    const likeProducts = useSelector((state: any) => state.like.likes)
    const location = useLocation();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    }, [location])

    return (
        <nav className='navbar-container flex justify-between bg-gradient-to-b from-blue-600 '>
            <div className='flex m-8'>
                <Link to='/' className='text-white text-2xl font-bold'>
                    <h1 className='text-black flex'><FaSellcast className='mt-1 text-blue-800'/>RESELL</h1>
                </Link>
            </div>
            <div>
                <input
                 className='search-bar md:my-8 m-8 px-4 py-1 border placeholder-gray-500 border-black bg-transparent rounded-md w-full'
                 type="text"
                 placeholder={props.placeholder}
                 onChange={props.handleChange}
                  />
            </div>
            <div>
                <ul className='hidden lg:flex m-4'>
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
                <div className="lg:hidden menu-button m-8 text-white text-2xl " onClick={() => setToggle(!toggle)}>
                    <div className={`navbar-burger-line1 ${toggle ? "close1" : ""}`}></div>
                    <div className={`navbar-burger-line2 ${toggle ? "close2" : ""}`}></div>
                    <div className={`navbar-burger-line3 ${toggle ? "close3" : ""}`}></div>
                </div>
            </div>
            {toggle ? sideNavbar() : null}
        </nav>
    )
}
const sideNavbar = () => {
    return (
        <div className='fixed z-50 bg-opacity-90 h-screen flex flex-col w-1/2 bg-gray-800 transition duration-700 ease-in-out'>
            <div className='flex flex-col mt-4 py-2'>
                <Link className='text-center text-white font-bold mt-20 hover:bg-blue-200 hover:text-gray-800 py-2 transition duration-500 ease-in-out' to="/">Home</Link>
                <Link className='text-center text-white font-bold mt-10 hover:bg-blue-200 hover:text-gray-800 py-2 transition duration-500 ease-in-out' to="/login">Login</Link>
                <Link className='text-center text-white font-bold mt-10 hover:bg-blue-200 hover:text-gray-800 py-2 transition duration-500 ease-in-out' to="/cart">Cart</Link>
                <Link className='text-center text-white font-bold mt-10 hover:bg-blue-200 hover:text-gray-800 py-2 transition duration-500 ease-in-out' to="/likeproducts">Like</Link>
            </div>
        </div>
    )
}
