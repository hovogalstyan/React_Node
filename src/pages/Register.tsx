import React, {FC, useEffect, useMemo, useState} from 'react';
import styles from '../styles/Register.module.css';
import AnimatedBox from "../component/AnimatedBox";
import HeaderAnimated from "../component/Register/HeaderAnimated";
import RegisterForm from "../component/Register/RegisterForm";
import {useAppDispatch, useAppSelector} from "../Types/types";
import {editIsLoading} from "../features/userRegister.Slice";

const Register: FC = () => {
    const [animatedRegisterModal, setAnimatedRegisterModal] = useState(false);
    const {isLoading} = useAppSelector(state => state.userRegisterSlice);
    const dispatch = useAppDispatch()
    useEffect(() => {
        setAnimatedRegisterModal(true)
    }, []);
    const activeClassContainer = useMemo(() => {
        return animatedRegisterModal ? styles.active_container : ''
    }, [animatedRegisterModal]);
    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                dispatch(editIsLoading(false))
            }, 1800)
        }
    }, [isLoading,dispatch])
    return (
        <div className={styles.Register}>
            <HeaderAnimated animatedRegisterModal={animatedRegisterModal}/>
            <div className={`${styles.container} ${activeClassContainer}`}>
                <div className={styles.anim_container_left_block}>
                    <AnimatedBox/>
                </div>
                <RegisterForm/>
            </div>
        </div>
    );
};

export default Register;
