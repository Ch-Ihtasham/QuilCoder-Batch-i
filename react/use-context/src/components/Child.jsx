import React from 'react'
import SubChild from './SubChild'
import { useContext } from 'react'
import { Counts } from '../context/Context'
export default function Child() {
    const data = useContext(Counts)
    return (
        <div>
            <SubChild />
            this is first child{data}
        </div>
    )
}
