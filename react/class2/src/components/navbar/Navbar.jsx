import React from 'react'
import logo from '../../assets/react.svg'

export default function Navbar() {
    return (
        <div className='max-w-[1300px] w-5/6  m-auto' >
            <nav className=' '>
                <ul className='flex  justify-between ' >
                    <img src={logo} alt="loggo" />
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </nav>
        </div>
    )
}
