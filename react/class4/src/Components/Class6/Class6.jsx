import React, { useState } from 'react'

export default function Class6() {
    
    const [btn, setBtn] = useState(true)
    return (
        <div>
            {/* {
                btn ? <div>this is quilcoders batch one</div> : <div> something went wrong</div>
            } */}
            {
                btn && <div>eesha like fast food </div>
            }

            <button onClick={() => setBtn(v => !v)} >true</button>

        </div>
    )
}

