import { createSlice } from '@reduxjs/toolkit'
//const createSlice = require('@reduxjs/toolkit').createSlice //1.STEP

import { ordered as cakeOrdered } from '../cake/cakeSlice'
//const  cakeActions = require('../cake/cakeSlice')

const initialState = { //3.STEP
    numOfIcescreams: 20,
}

const icecreamSlice = createSlice({ //2.STEP
    name: 'icecream',
    initialState,
    reducers: {     //4.STEP
        ordered: (state) => {
            state.numOfIcescreams--
        },
        restocked: (state, action) => {
            state.numOfIcescreams += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numOfIcescreams--
        })
    }
})
export default icecreamSlice.reducer //module.exports = icecreamSlice.reducer  //5.STEP
export const {ordered, restocked} = icecreamSlice.actions //module.exports.icecreamActions = icecreamSlice.actions //5.STEP