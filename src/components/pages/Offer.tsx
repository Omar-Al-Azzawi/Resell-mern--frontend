import React from 'react'

export default function Offer() {
 /*    const [user] = useState(JSON.parse(localStorage.getItem('user') || '{}'))
    const [userLocal] = useState(JSON.parse(localStorage.getItem('userLocal') || '{}'))
 
    const userName = user.result?.name || userLocal?.data?.user?.firstName
 */
    return (
        <section>
            <h1 className='text-xl mb-4'>Add your offer</h1>
            <p className='mb-4'></p>
            <div className='mb-4'>
               {/*  {post.map((post: any, index: any) => (
                    <p key={index}>{`${userName}: ${post}`}</p>
                ))} */}
            </div>
            <input className='border border-gray-400 px-2 rounded-l-md' type="text" placeholder='Enter your offer..'/>
            <button className='border border-gray-400 px-2 rounded-r-md hover:bg-blue-400 hover:text-white'>Submit</button>
        </section>
    )
}
