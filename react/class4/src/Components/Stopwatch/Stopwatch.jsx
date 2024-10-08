import React, { useRef, useState } from 'react'

export default function Stopwatch() {
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    let a = useRef(null)
    let time = 0;

    function start() {

        setStartTime(Date.now())
        setEndTime(Date.now())
        clearInterval(a.current)
        a.current = setInterval(() => {
            setEndTime(Date.now())
        });

    }
    function stop() {
        clearInterval(a.current)
    }
    time = (endTime - startTime) / 1000
    const [abc, setAbc] = useState(true)


    return (
        <div className='w-5/6 m-auto'>
            <div className='mb-4'><span className='bg-white text-black  text-center my-10 font-semibold text-xl p-2'>time is</span>
                <span>{time.toFixed(3)}</span></div>
            <button onClick={start} className='bg-white text-black font-semibold px-6 py-1 rounded-full mr-4 border-4 border-black '>start</button>
            <button onClick={stop} className='bg-red-700 text-white font-semibold px-6 py-1 rounded-full mr-4 border-4 border-white'>stop</button>

            <button onClick={() => {
                abc ? start() : stop(),
                    setAbc(prevalue => !prevalue)
            }} >{abc ? 'start' : 'stop'}</button>

        </div>
    )
}
