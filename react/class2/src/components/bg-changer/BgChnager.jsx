import React, { useState } from 'react'

export default function BgChnager() {
    const [color, setColor] = useState('black')
    function esha(){
        setColor('white')
    }
    return (
        <div className='w-5/6 m-auto h-screen ' style={{ backgroundColor: color }}>
            <div className='pt-10'>
                <button onClick={() => {
                    setColor('red')
                }} className='bg-red-400 text-white w-20 rounded-xl'>red</button>
                <button onClick={() => {
                    setColor('blue')
                }} className='bg-blue-500 text-white w-20 rounded-xl'>blue</button>
                <button onClick={() => {
                    setColor('#334155')
                }} className='bg-slate-700 text-white w-20 rounded-xl'>slate</button>
                <button onClick={()=>{
                    setColor('green')
                }} className='bg-white text-black px-10 py-2 rounded-xl'>esha</button>
                <input onChange={(e)=>{
                    setColor(e.target.value)
                }} type="color" />
            </div>

        </div>
    )
}
