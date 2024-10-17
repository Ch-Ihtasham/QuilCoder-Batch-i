import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Fotter from '../components/Fotter/Fotter'

export default function Home() {
    return (
        <div>
            <Header />
            <input type='file' multiple/>
            <Hero />
            <Fotter />
        </div>
    )
}
