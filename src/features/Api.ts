import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userLoginAoiTypes} from "../Types/types";


export const loginUserApi = createAsyncThunk('login', async (arg: userLoginAoiTypes) => {
    const {data} = await axios.post('http://localhost:4451/auth/login', arg)
    return data
})

export const registerUserApi = createAsyncThunk('register', async (arg: any) => {
    const {data} = await axios.post('http://localhost:4451/auth/register', arg)
    return data
})
