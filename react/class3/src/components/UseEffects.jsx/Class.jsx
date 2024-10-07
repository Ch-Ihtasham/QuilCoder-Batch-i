import React, { useState, useEffect } from 'react'

const Class = () => {
    // const [no, setNo] = useState(0)
    // const [no1, setNo1] = useState(1)
    // useEffect(()=>{
    //     alert('this is a function which execute on every rendering')
    // })
    // useEffect(()=>{
    //     alert('this is a function which execute on every rendering')
    // },[])
    // useEffect(()=>{
    //     alert('this is a function which execute on every rendering')
    // },[no1])
    // const [data, setData] = useState('posts')
    // const [ans, setAns] = useState([])
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${data}`)
    //         .then(response => response.json())
    //         .then(json => setAns(json))

    // })
    // you have to do this assigment with aysnc awiat 
    // console.log(ans)
    const [dark, setDark] = useState(false)
    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    return (
        <div>
            {/* <button onClick={() => setNo(preValue => preValue + 1)}>count{no}</button> <br />
            <button onClick={() => setNo1(preValue => preValue + 1)}>count{no1}</button> */}
            <div>
                {/* <button onClick={() => setData(preValue => 'posts')}>posts</button> <br />
                <button onClick={() => setData(preValue => 'todos')}>todos</button> <br />
                <button onClick={() => setData(preValue => 'users')}>users</button> */}
                {/* <div className='bg-white text-black text-center w-28'>{data}</div> */}
                {/* <div>{ans.map((v, i) => {
                    return (
                        <div key={i}>
                            {JSON.stringify(v)}
                        </div>
                    )

                })}</div> */}
                {/* <div>{JSON.stringify(ans[0])}</div> */}
            </div>

            <button style={theme} onClick={()=> setDark(preValue=> !preValue )}>theme</button>
            

        </div>
    )
}

export default Class
