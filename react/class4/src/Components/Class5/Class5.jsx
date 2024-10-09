import React, { useRef } from 'react'
import '../../index.css'
export default function Class5() {
    const inp = useRef(null)
    return (
        <div>
            <div className='text-xl hover:text-green-500 transition duration-1000'>
                this is our class five
            </div>
            <input ref={inp} type="text" />
            <button className='bg-white text-black dark:bg-black dark:text-white' onClick={() => inp.current.focus()} >focus btn</button>

            <div className='grid grid-cols-3 gap-3'>
                <div className=' bg-red-300 w-96 border '>1</div>
                <div className=' bg-red-300 w-96'>2</div>
                <div className=' bg-red-300 w-96'>3</div>
                <div className=' bg-red-300 w-48'>4</div>
                <div className=' bg-red-300 w-48'>5</div>
                <div className=' bg-red-300 w-48'>6</div>
                <div className=' bg-red-300 w-48'>7</div>
            </div>
            <div className=' relative' ><button className='absolute translate-x-0 hover:translate-x-[400px] transition duration-1000'>hover me</button></div>
        </div>
    )
}
