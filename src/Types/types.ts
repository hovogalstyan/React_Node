import {AppDispatch, RootState} from "../features/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface registerIconType {
    Icon: any,
    name: string,
    bg_color: string
}

export interface userLoginAoiTypes {
    email: string,
    password: string
}

export interface loginInitialStateTypes {
    user: any
    isLoading: null | boolean,
    error: any
}

export interface registerInitialStateTypes {
    user: any
    isLoading:null |  boolean,
    error: any
}

export interface getLoginDataTypes {
    success?: boolean,
    token?: string,
}

