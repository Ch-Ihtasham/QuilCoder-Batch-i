import React from 'react'
import Header from './Header/Header'
import Fotter from './Fotter/Fotter'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Fotter />

        </div>
    )
}
