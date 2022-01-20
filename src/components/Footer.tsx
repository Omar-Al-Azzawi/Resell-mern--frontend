import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'

import "./Footer.css";

export default function Footer() {
    return (
        <footer className='footer w-full flex justify-between bg-gradient-to-t from-blue-500 '>
            <div className='mt-4 md:m-20'>
                <ul className='flex items-center justify-center'>
                    <li className='text-gray-600 mx-3 text-2xl hover:text-black'>
                            <TiSocialFacebook />
                    </li>
                    <li className='text-gray-600 mx-3 text-2xl hover:text-black'>
                            <TiSocialInstagram />
                    </li>
                    <li className='text-gray-600 mx-3 text-2xl hover:text-black'>
                            <TiSocialTwitter />
                    </li>
                </ul>
            </div>
            <div className='m-4 text-center md:m-20'>
                <p className='text-gray-600'>
                    &copy; 2021 Omar Al-Azzawi
                </p>
            </div>
        </footer>
    )
}