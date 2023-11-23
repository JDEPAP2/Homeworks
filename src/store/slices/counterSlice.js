import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter: 0
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, {payload}) => {
            state.counter += Math.floor(payload.value)
        },
        decrement: (state, {payload}) => {
            state.counter -= payload.value
        }
    }
})

export const { increment, decrement } = counterSlice.actions;