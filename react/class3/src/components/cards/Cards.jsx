import React from 'react'
import { IoStarSharp } from "react-icons/io5";

export default function Cards(props) {
   const array=[
    {
        
        name:'ihtasham',
        degree:'bsit',
        stars:<IoStarSharp />
    },
    {
        name:'ihtasham gxjhqsghjg',
        degree:'bsit',
        stars:<IoStarSharp />
    },
    {
        name:'ihtasham gdkjwegdjkgwkjg',
        degree:'bsit',
        stars:<IoStarSharp />
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
                <div className='hover:font-extrabold hover:cursor-pointer'>{props.name}</div>
                
                <div>{props.degree}</div>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <div>seven{v.stars}</div>
            </div>

        </div>
        ))}
        </div>
    )
}
