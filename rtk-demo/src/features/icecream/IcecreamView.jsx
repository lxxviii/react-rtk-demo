import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export default function IcecreamView() {

    const [value, setValue] = useState(1)

    const numOfIcescreams = useSelector((state) => state.icecream.numOfIcescreams)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Number of Ice Cream - {numOfIcescreams} </h2>
            <button onClick={() => dispatch(ordered())}>Order Ice Cream </button>
            <input type='number' value={value} onChange={(e) => { setValue(parseInt(e.target.value)) }} />
            <button onClick={() => dispatch(restocked(value))}> Restock Ice Creams </button>
        </>
    )
}