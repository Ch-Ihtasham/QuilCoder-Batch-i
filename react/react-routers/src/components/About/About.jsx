import React from 'react'
import { Outlet } from 'react-router-dom'

export default function About() {
    return (
        <div>
            this is our About Page
            <Outlet />
        </div>
    )
}
