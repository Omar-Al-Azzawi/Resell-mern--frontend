import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../featurs/authSlice';

const Logout = (props: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <p onClick={() => {
            localStorage.removeItem('user');
            dispatch(logout());
            navigate('/'); 
            window.location.reload();
        }} className="cursor-pointer text-black font-bold hover:bg-black hover:text-gray-300 border border-black  px-3 rounded-md">Logout</p>
    )
}

export default Logout;