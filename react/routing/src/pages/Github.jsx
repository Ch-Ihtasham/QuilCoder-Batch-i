import React from 'react'
import { useParams } from 'react-router-dom'
export default function Github() {
    const {username} = useParams()
    return (
        <div>
            <div>this is {username} github</div>
        </div>
    )
}
