const Logout = () => {
    return (
        <p onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
        }} className="cursor-pointer hover:text-black">Logout</p>
    )
}

export default Logout;