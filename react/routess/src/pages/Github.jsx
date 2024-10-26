import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
    // const [data, setData] = useState('')
    const data = useLoaderData()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ch-ihtasham')
    //         .then(respone => respone.json())
    //         .then(data => setData(data))
    // }, [])
    // useEffect(() => {
    //     async function gitdata() {
    //         try {
    //             const respone = await fetch('https://api.github.com/users/ch-ihtasham')
    //             const outcome = await respone.json()
    //             setData(outcome)
    //         }
    //         catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     gitdata()
    // }, [])

    return (
        <div>
            this page belongs to Github
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}
export async function Gitdata() {
    try {
        const respone = await fetch('https://api.github.com/users/ch-ihtasham')
        const outcome = await respone.json()
        return outcome
    }
    catch (error) {
        console.error(error)
    }
}