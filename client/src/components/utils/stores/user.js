import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

export const userSlice = createSlice({
    name: 'user',
    initialState:{ value: initialState },
    reducers:{
        saveUser:(state, action) => {
            state.value = action.payload
        },
        logOut:(state) => {
            state.value = initialState
        },
    }
})

export const {saveUser, logOut} = userSlice.actions

export default userSlice.reducer;