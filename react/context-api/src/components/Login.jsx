import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
export default function Login() {
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')
    const { setUser } = useContext(UserContext)
    function handelSubmit(e) {
        e.preventDefault()
        setUser({ userName, pass })
    }
    return (
        <div>
            <input type="text"
                placeholder='UserName'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            /> <br /> <br />
            <input type="password"
                placeholder='Password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            /> {" "}
            <button onClick={handelSubmit} >Login</button>
        </div>
    )
}
