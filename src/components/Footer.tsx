import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer className='w-full flex justify-between bg-gradient-to-t from-blue-500 '>
            <div className=' m-20'>
                <ul className='flex items-center justify-center'>
                    <li className='text-gray-600 mx-3 text-2xl hover:text-black'>
                            <AiFillFacebook />
                    </li>
                    <li className='text-gray-600 mx-3 text-2xl hover:text-black'>
                            <AiFillInstagram />
                    </li>
                    <li className='text-gray-600 mx-3 text-2xl hover:text-black'>
                            <AiFillTwitterSquare />
                    </li>
                </ul>
            </div>
            <div className='m-20'>
                <p className='text-gray-600'>
                    &copy; 2021 Omar Al-Azzawi
                </p>
            </div>
        </footer>
    )
}