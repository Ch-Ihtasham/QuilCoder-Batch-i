import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    const { id } = useParams();
   
  return (
    <div>
      here is the detail of id no {id}
      his name is {id}
      his father name is {id}

    </div>
  )
}
