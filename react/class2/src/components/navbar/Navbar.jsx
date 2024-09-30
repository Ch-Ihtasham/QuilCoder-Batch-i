import React from 'react'
import logo from '../../assets/react.svg'

export default function Navbar() {
    return (
        <div>
            <nav className=''>
                <ul className='flex  w-full justify-evenly'>
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
