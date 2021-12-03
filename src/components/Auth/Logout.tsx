import { setUseProxies } from 'immer';
import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../featurs/authSlice';

const Logout = (props: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <p onClick={() => {
            /* localStorage.removeItem('user'); */
            dispatch(logout());
            navigate('/'); 
        }} className="cursor-pointer text-black font-bold hover:bg-white border border-black  px-3 rounded-md">Logout</p>
    )
}

export default Logout;