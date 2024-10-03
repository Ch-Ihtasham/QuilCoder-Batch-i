import React from 'react'

export default function Cards(props) {
   const array=[
    {
        name:'ihtasham',
        degree:'bsit'
    },
    {
        name:'ihtasham gxjhqsghjg',
        degree:'bsit'
    },
    {
        name:'ihtasham gdkjwegdjkgwkjg',
        degree:'bsit'
    }

]
    return (
        <div>
        {array.map((v,i)=>(
            <div key={i}>
            <div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rerum incidunt error nobis minima temporibus nulla atque natus repellendus voluptate eligendi eius perferendis, cumque ad amet iure explicabo nostrum quasi.</div>

            </div>
            <div>
                <div>{v.name}</div>
                <div></div>
                <div>seven</div>
            </div>

        </div>
        ))}
        </div>
    )
}
