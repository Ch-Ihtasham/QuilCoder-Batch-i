import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className='flex justify-center'>
            <ul className='flex gap-10'>
                <li><NavLink to='/' className={({ isActive }) => (` ${isActive ? 'text-green-700' : 'text-black '} text-xl font-semibold`)}>Home</NavLink></li>
                <li><NavLink to='/contact' className={({ isActive }) => (` ${isActive ? 'text-green-700' : 'text-black '} text-xl font-semibold`)}>contact</NavLink></li>
                <li><NavLink to='/blog' className={({ isActive }) => (` ${isActive ? 'text-green-700' : 'text-black '} text-xl font-semibold`)}>Blog</NavLink></li>
            </ul>
        </div>
    )
}
