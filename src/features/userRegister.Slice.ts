import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {registerInitialStateTypes} from "../Types/types";
import {registerUserApi} from "./Api";

const initialState: registerInitialStateTypes = {
    user: [],
    isLoading: null,
    error: null
}

const userRegisterSlice = createSlice({
    name: 'user/register',
    initialState,
    reducers: {
        editIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(registerUserApi.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(registerUserApi.fulfilled, (state, action: PayloadAction<any>) => {
            state.user = action.payload
        })
        builder.addCase(registerUserApi.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.user = []
            state.error = action.payload
        })
    }
})
export default userRegisterSlice.reducer
export const  {editIsLoading} = userRegisterSlice.actions
