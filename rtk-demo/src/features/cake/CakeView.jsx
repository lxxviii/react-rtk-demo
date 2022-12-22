import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export default function CakeView() {

    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Number Of Cakes - {numOfCakes} </h2>
            <button onClick={() => dispatch(ordered())}> Order Cake </button>
            <button onClick={() => dispatch(restocked(5))}> Restock Cakes</button>
        </>
    )
}