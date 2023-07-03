import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginUserApi} from "./Api";
import {getLoginDataTypes, loginInitialStateTypes} from "../Types/types";

const initialState: loginInitialStateTypes = {
    user: {},
    isLoading: null,
    error: null
}
const UserLoginSLice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        removeCountResult: (state) => {
            state.user.clickCounterNoneResult = 0
            state.user = {}
        },
        editIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUserApi.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginUserApi.fulfilled, (state, action: PayloadAction<getLoginDataTypes>) => {
            state.user = action.payload
        })
        builder.addCase(loginUserApi.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.user = {}
            state.error = action.payload
        })
    }
})

export default UserLoginSLice.reducer
export const {removeCountResult,editIsLoading} = UserLoginSLice.actions
