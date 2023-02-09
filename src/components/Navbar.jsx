import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-green-500 text-white text-lg mb-10'>
        <div className='flex flex-row justify-between px-8'>
            <div className='flex flex-row space-x-5 py-5'>
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </div>
            <div className='flex flex-row space-x-5 py-5'>
                <div>Login</div>
                <div>Register</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar