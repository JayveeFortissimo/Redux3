import { createSlice } from "@reduxjs/toolkit"

const InitialAutState = {Credentials:false};

const LoginDump = createSlice({
    name: 'authentication' ,
    //TakeNote dat small letter yung i sa initial STate
    initialState: InitialAutState,
    reducers:{
        login(state,action){
              state.Credentials = true
        },
        logOut(state,action){
           state.Credentials = false
        }
    }
})


export const LoginAction = LoginDump.actions

export default LoginDump.reducer;