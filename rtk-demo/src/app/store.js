import { configureStore } from '@reduxjs/toolkit'
//const configureStore = require('@reduxjs/toolkit').configureStore
//const reduxLogger = require('redux-logger')


import cakeReducer from '../features/cake/cakeSlice'
//const cakeReducer = require('../features/cake/cakeSlice')
import icecreamReducer from '../features/icecream/icecreamSlice'
//const icecreamReducer = require('../features/icecream/icecreamSlice')  //6.STEP
import userReducer from '../features/user/userSlice'
//const userReducer = require('../features/user/userSlice')

//const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    //middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})
export default store //module.exports = store

//cont rootReducer = combineReducers({cake:cakeReducer,iceCream:iceCreamReducer})
// yapısının RTK 'ya taşınması işlemidir.