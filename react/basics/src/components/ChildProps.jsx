import React from 'react'

export default function ChildProps(props) {

    return (
        <div>
            {/* <button onClick={props.funFive}>Child Button</button> */}
            <button onClick={() => props.funj('hamara fatimah')}>Child Button</button>
        </div>
    )
}
