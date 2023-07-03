import React, {useEffect} from 'react';
import styles from '../../styles/Login.module.css';
import CustomInput from "../CustomInput";
import RememberLoginValue from "./RememberLoginValue";
import IconsItems from "./IconsItems";
import {Formik} from "formik";
import {LoginSchema} from "../validate/LogineValidate";
import {useToggle} from "../hooks/useToogle";
import ModalSaveDataMessing from "./ModalSaveDataMessing";
import {useAppDispatch, useAppSelector} from "../../Types/types";
import {loginUserApi} from "../../features/Api";
import {useNavigate} from "react-router-dom";
import {removeCountResult} from "../../features/userLogin.Slice";
import {useCookies} from "react-cookie";


const FormLogin = () => {
    const saveLogin = JSON.parse(localStorage.getItem('save_login') as any);
    const {user, isLoading} = useAppSelector(state => state.UserLoginSlice);
    const [openSaveModal, toggleSaveModal, setSaveModal] = useToggle(false);
    const [, setToken] = useCookies()
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (user.clickCounterNoneResult === 3 && user.success === false && isLoading === false) {
            setTimeout(() => {
                navigate('/register')
                dispatch(removeCountResult())
            }, 1000)
        }
    }, [user, dispatch, navigate,isLoading]);
    useEffect(() => {
        if (user.success === true && user.token) {
            setToken('token', user.token)
        }
    }, [user])
    return (
        <div className={styles.Login_Form}>
            <h1>Your logo</h1>
            <h2>Login</h2>
            {
                user.message && isLoading === false && user?.clickCounterNoneResult !== 3 &&
                <div className={styles.error_messing}>
                    <small>{user.message}</small>
                </div>
            }
            <Formik initialValues={{
                email: saveLogin ? String(saveLogin.email) : '',
                password: saveLogin ? String(saveLogin.password) : ''
            }}
                    onSubmit={(values) => dispatch(loginUserApi(values))}
                    validationSchema={LoginSchema}
            >
                {({values, handleSubmit, handleChange, handleBlur, touched, errors}) => (
                    <form className={styles.form}
                          onSubmit={handleSubmit}
                    >
                        <CustomInput
                            type={'text'}
                            onChange={handleChange('email')}
                            value={values.email}
                            placeholder={'Email'}
                            onBlur={handleBlur('email')}
                            inputStyles={styles.input_styles}>
                            {errors.email && touched.email && <small>{errors.email}</small>}
                        </CustomInput>
                        <CustomInput
                            type={'password'}
                            onChange={handleChange('password')}
                            value={values.password}
                            onBlur={handleBlur('password')}
                            placeholder={'Password'}
                            inputStyles={styles.input_styles}>
                            {errors.password && touched.password && <small>{errors.password}</small>}
                        </CustomInput>
                        <div className={styles.password_block_text}>
                            <RememberLoginValue openSaveModal={toggleSaveModal} isError={errors} values={values}/>
                            <small>Forgot Password?</small>
                        </div>
                        <button type={"submit"} className={styles.btn_login}>Sign in</button>
                        <IconsItems/>
                        <p>Don’t have an account yet? <span onClick={() => navigate('/register')}>Register</span></p>
                        {openSaveModal && <ModalSaveDataMessing closeModal={setSaveModal}/>}
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default FormLogin;
