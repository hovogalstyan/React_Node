import {configureStore, combineReducers} from "@reduxjs/toolkit";
import UserLoginSlice from "./userLogin.Slice";
import userRegisterSlice from "./userRegister.Slice";
const Root = combineReducers({
    UserLoginSlice,
    userRegisterSlice
})

export const store = configureStore({reducer: Root});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
