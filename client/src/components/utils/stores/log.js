import { createSlice } from '@reduxjs/toolkit'

const initialState = 'none'

export const logSlice = createSlice({
    name: 'user',
    initialState:{ value: initialState },
    reducers:{
        logIn:(state) => {
            if(state.value === 'login'){
                state.value = 'none'
            }else{
                state.value = 'login'
            }
        },
        signIn:(state) => {
            if(state.value === 'signin'){
                state.value = 'none'
            }else{
                state.value = 'sigin'
            }
        },
        none:(state) => {
            state.value= 'none'
        }
    }
})

export const {logIn, signIn, none} = logSlice.actions

export default logSlice.reducer;