import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>

                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </nav>
        </div>
    )
}
