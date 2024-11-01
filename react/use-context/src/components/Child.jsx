import React, { memo } from 'react'
import SubChild from './SubChild'
import { useContext } from 'react'
import { Counts } from '../context/Context'
export default memo(function Child({ count }) {
    const data = useContext(Counts)
    console.log('chid is rendering')
    return (
        <div>
            <SubChild />
            this is out child which not rerending{count}
            {/* this is first child{data} */}
        </div>
    )
})
