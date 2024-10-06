import React, { useState } from 'react'


export default function Us() {
    // const ab = () => {
    //     console.log('rerendring')
    //     return 8
    // }
    // const [num, setNum] = useState(()=>{
    //     console.log('rerendring')
    //     return 8
    // })
    // const [num ,setNum]=useState(()=>{ return 9 } )
    // const decrement = () => {
    // setNum(abc => abc - 1)

    // setNum(abc => abc - 1)
    // setNum((abc)=>{
    //     return abc -1
    // })
    // }
    // const incerement = () => {
    //     setNum(abc => abc + 1)
    // }
    const [num, setNum] = useState({ name: 'eesha', rollno: 12 })
    const [i, setI] = useState(0)

    const dec = () => {
        // setNum((preValue) => {
        //     return {
        //         ...preValue,
        //         name: preValue.name = 'amara',
        //         rollno: preValue.rollno + 1
        //     }
        // })
        const names = ['a', 'b', 'c', 'd','e']

        setNum((preValue) => (
            {
                ...preValue,
                name: preValue.name = names[i],
                rollno: preValue.rollno + 1,

            }))
        setI(prev => prev + 1)
    }

    return (
        <div>
            <div className='flex gap-2'>
                <div onClick={dec}>-</div>
                <div>{num.name}</div>
                <div>{num.rollno}</div>
                <div >+</div>
            </div>

        </div>
    )
}
