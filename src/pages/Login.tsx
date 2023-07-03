import React, {FC, useEffect} from 'react';
import loginImg from '../component/images/logine.png';
import styles from '../styles/Login.module.css';
import ImagesLogin from "../component/Login/ImagesLogin";
import FormLogin from "../component/Login/FormLogin";
import {useAppDispatch, useAppSelector} from "../Types/types";
import IsLoadingModal from "../component/IsLoadingModal";
import {PropagateLoader} from "react-spinners";
import {editIsLoading} from "../features/userLogin.Slice";

const Login: FC = () => {
    const {isLoading} = useAppSelector(state => state.UserLoginSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                dispatch(editIsLoading(false))
            }, 1500)
        }
    }, [isLoading])
    return (
        <div className={styles.Login}>
            <img className={styles.bac_imag} src={loginImg} alt="login"/>
            <div className={styles.container}>
                {isLoading && <IsLoadingModal
                    styles={styles.loading}
                    animatedIcons={ <PropagateLoader color="#ffffff" />}/>}
                <FormLogin/>
                <ImagesLogin/>
            </div>
        </div>
    );
};

export default Login;
