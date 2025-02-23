import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../App.css'
export default function Header() {

    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => ` ${isActive ? 'active-link' : ''}`}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => ` ${isActive ? 'active-link' : ''}`}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => ` ${isActive ? 'active-link' : ''}`}>Contact</NavLink></li>
                    <li><NavLink to="/amara" className={({ isActive }) => ` ${isActive ? 'active-link' : ''}`}>Amara</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
