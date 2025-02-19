import React, { useState } from 'react'

export default function Method() {
    const [value, setValue] = useState('')
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [found, setfound] = useState('User Not Found')
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "amara" }
    ];
    // async function finder(e) {
    //     setId(e.target.value)
    //     const user = users.find(user => user.id === Number(e.target.value))
    //     if (user.id) {
    //         setName(user.name)
    //         setId(user.id)
    //     }
    // }

    async function finder(e) {
        setValue(e.target.value)
        const user = users.find(user => user.id === Number(e.target.value))
        if (user) {
            setId(user.id)
            setName(user.name)
        } else {
            setId('');
            setName('');
        }
    }

    return (
        <div>
            {/* {[1, 2, 3, 4, 5, 6].filter(x => x > 3)}
            {[1, 2, 3, 4].filter(x => x > 2).map(x => (
                <div key={x}>
                    {x}
                </div>
            ))} */}


            <div>enter your id</div>

            <input type="number"
                value={value}
                onChange={finder}
            />
            <br /> <br />
            <div>
                {id ? (
                    <div>
                        <div>Id: {id}</div>
                        <div>Name: {name}</div>
                    </div>
                ) : (
                    value && <div>User Not Found</div> // Shows only if input is non-empty
                )}
            </div>
        </div >
    )
}
