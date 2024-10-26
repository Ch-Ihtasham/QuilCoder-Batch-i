import React from 'react'
import { useContext } from 'react'
import { Counts } from '../context/Context'
export default function SubChild() {
    const  c  = useContext(Counts)
    return (
        <div>
            this is subchild {c}
            {/* <button onClick={() => setCount(count + 1)}>Increase Count</button> */}
        </div>
    )
}
