import React from 'react'
import logo from '../../assets/react.svg'

const Card = (props) => {
    return (
        <div>
            <div className='border bg-black w-1/5 text-white  text-xs p-4'>
                <div className='mb-10 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae nesciunt amet aliquid doloremque, cupiditate, voluptas numquam eligendi ducimus tempora laborum est velit eaque harum ab tempore possimus explicabo magni. </div>
                <div className='flex gap-[20px]'>
                    <img src={logo} alt="profile pic" />
                    <div>
                        <div>{props.name}</div>
                        <div>{props.role}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
