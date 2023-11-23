import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: 'checking',
    uuid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            state.email = action.payload.email
        },
        logout:  (state, action) => {
            state.status = 'logout'
            state.email = null
        },
        checkingCredentials: (state, action) => {
            state.status = action.payload.success? 'logged':'failed'
            state.email = action.payload.email
        },

    }
})

export const {register, logout, checkingCredentials} = authSlice.actions