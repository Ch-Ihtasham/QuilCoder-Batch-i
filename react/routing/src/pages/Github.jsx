import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
    // const [data, setData] = useState('')
    const amara = useLoaderData()

    // this is a call of api with simple promise

    // const {username} = useParams()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ch-ihtasham')
    //         .then(response => response.json())
    //         .then(data => setData(data))
    // }, [])



    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://api.github.com/users/ch-ihtasham')
    //             const apiData = await response.json()
    //             setData(apiData)
    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData()
    // }, [])

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('https://api.github.com/users/ch-ihtasham')
    //         const apiData = await response.json()
    //         setData(apiData)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }
    // fetchData()
    return (
        <div>
            {/* <div>this is {username} github</div> this is with the help of parms where we call it  */}
            {amara.name}
        </div>
    )
}
export const fetchData = async () => {
    try {
        const response = await fetch('https://api.github.com/users/ch-ihtasham')
        const apiData = await response.json()
        return apiData
    }
    catch (error) {
        console.log(error)
    }
}
