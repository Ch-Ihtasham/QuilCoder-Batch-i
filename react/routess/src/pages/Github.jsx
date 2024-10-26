import React, { useEffect, useState } from 'react'

export default function Github() {
    const [data, setData] = useState('')
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ch-ihtasham')
    //         .then(respone => respone.json())
    //         .then(data => setData(data))
    // }, [])
    useEffect(() => {
        async function gitdata() {
            try {
                const respone = await fetch('https://api.github.com/users/ch-ihtasham')
                const outcome = await respone.json()
                setData(outcome)
            }
            catch (error) {
                console.error(error)
            }
        }
        gitdata()
    }, [])

    return (
        <div>
            this page belongs to Github
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}
