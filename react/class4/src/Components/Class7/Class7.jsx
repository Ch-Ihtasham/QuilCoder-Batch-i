import React from 'react'

export default function Class7({ name }) {
    function Post() {
        return (
            <button className='bg-blue-500 px-2 py-1 font-semibold border border-white rounded-full'>Post</button>
        )
    }
    const Play = () => {
        return (
            <button className='bg-blue-500 px-2 py-1 font-semibold border border-white rounded-full'>Play</button>
        )
    }
    return (
        <div>
            <button className='bg-blue-500 px-2 py-1 font-semibold border border-white rounded-full'>{name}</button>
            {/* <Follow />
            <Play />
            <Post /> */}
            {/* <Eesha/> */}
        </div>
    )
}

const Follow = () => {
    return (
        <button className='bg-blue-500 px-2 py-1 font-semibold border border-white rounded-full'>Follow</button>
    )
}

function Eesha() {
    return (
        <div>this is eeshas function</div>
    )
}
