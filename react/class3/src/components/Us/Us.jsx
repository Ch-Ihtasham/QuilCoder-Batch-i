import React, { useState } from 'react'
 

export default function Us() {
    const ab=()=>{
        console.log('rerendring')
        return 8
    }
    // const [num, setNum] = useState(()=>{
    //     console.log('rerendring')
    //     return 8
    // })
    const [num ,setNum]=useState(()=>{ return 9 } )
    const decrement = () => {
        setNum(abc => abc - 1)
        
        // setNum(abc => abc - 1)
        // setNum((abc)=>{
        //     return abc -1
        // })
    }
    const incerement = () => {
        setNum(abc => abc + 1)
    }
    return (
        <div>
            <div className='flex gap-2'>
                <div onClick={decrement}>-</div>
                <div>{num}</div>
                <div onClick={incerement}>+</div>
            </div>

        </div>
    )
}
