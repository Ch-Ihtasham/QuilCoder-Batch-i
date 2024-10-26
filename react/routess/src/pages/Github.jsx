import React, { useEffect, useState } from 'react'

export default function Github() {
    const [data, setData] = useState('')
    useEffect(() => {
        fetch('https://api.github.com/users/ch-ihtasham')
            .then(respone => respone.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            this page belongs to Github
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}
