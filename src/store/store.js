import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/authSlice'
import { counterSlice } from './slices/counterSlice'

export const store = configureStore({
    reducer:{
        email: authSlice.reducer,
        counter: counterSlice.reducer
    }
})