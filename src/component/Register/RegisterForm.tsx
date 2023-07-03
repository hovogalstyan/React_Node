import React, {FC, useEffect, useState} from 'react';
import Header from "./Header";
import IconsList from "./IconsList";
import IconBottomTitle from "./IconBottomTitle";
import {Formik} from "formik";
import CustomInputRegister from "../CustomInputRegister";
import {BiUser} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import {VscLockSmall} from "react-icons/vsc";
import useActiveClassTime from "../hooks/useActiveClassTime";
import RegisterBottom from "./RegisterBottom";
import BackLogin from "./BackLogin";
import ErrorMessing from "./ErrorMessing";
import {RegisterSchema} from "../validate/LogineValidate";
import ShowPassword from "./ShowPassword";
import {useToggle} from "../hooks/useToogle";
import {useAppDispatch, useAppSelector} from "../../Types/types";
import {registerUserApi} from "../../features/Api";
import ServerErrorModal from "./ServerErrorModal";
import {FadeLoader} from "react-spinners";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import IsLoadingModal from "../IsLoadingModal";
import styles from '../../styles/Register.module.css';
const RegisterForm: FC = () => {
    const [activeClassForm, activeValue] = useActiveClassTime(styles.active_class_form, 7000);
    const [openServerModal, setOpenServerModal] = useState(false);
    const [showPasswordValue, toggleClick] = useToggle(false);
    const [, setToken] = useCookies()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const userRegister = useAppSelector(state => state.userRegisterSlice)
    useEffect(() => {
        if (userRegister.user?.token) {
            navigate('/task.com')
            setToken("token", userRegister.user.token)
        }
    }, [userRegister.user,navigate,setToken])
    useEffect(() => {
        if (userRegister.user.success === false) {
            setOpenServerModal(true)
        } else {
            setOpenServerModal(false)
        }
    }, [userRegister.user])
    return (
        <div className={styles.register_form}>
            <div className={styles.container_header}>
                <Header text={"Create"}/>
                <Header text={"Account"}/>
            </div>
            <IconsList/>
            <IconBottomTitle/>
            {openServerModal && userRegister.isLoading === false &&
                <ServerErrorModal
                    closeModal={setOpenServerModal}
                    message={userRegister.user.message}/>}
            {userRegister.isLoading &&
                <IsLoadingModal
                    styles={styles.isLoading}
                    animatedIcons={
                    <FadeLoader
                        height={23}
                        width={5}
                        margin={5}
                        color="blue" />}/>
            }
            <Formik
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={(values) => dispatch(registerUserApi(values))}
                validationSchema={RegisterSchema}
            >
                {({values, handleBlur, handleSubmit, handleChange, errors, touched}) => (
                    <form className={`${styles.form} ${activeClassForm}`} onSubmit={handleSubmit}>
                        <CustomInputRegister
                            block_styles={styles.input_container}
                            value={values.name}
                            onBlur={handleBlur('name')}
                            onChange={handleChange('name')}
                            type={'text'}
                            input_box_styles={styles.input_block}
                            icons={<BiUser/>}
                            timeToggle={2000}
                            lineActiveValue={activeValue}
                        >
                            {values.name.length < 1 && <span className={styles.placeholder_title}>Name...</span>}
                            <ErrorMessing
                                touched={touched.name}
                                errors={errors.name}
                                errorStyles={styles.input_error_messing}
                            />
                        </CustomInputRegister>
                        <CustomInputRegister
                            block_styles={styles.input_container}
                            value={values.email}
                            onBlur={handleBlur('email')}
                            onChange={handleChange('email')}
                            type={'text'}
                            input_box_styles={styles.input_block}
                            icons={<AiOutlineMail/>}
                            timeToggle={4500}
                            lineActiveValue={activeValue}
                        >
                            {values.email.length < 1 && <span className={styles.placeholder_title}>Email...</span>}
                            <ErrorMessing
                                touched={touched.email}
                                errors={errors.email}
                                errorStyles={styles.input_error_messing}
                            />
                        </CustomInputRegister>
                        <CustomInputRegister
                            block_styles={styles.input_container}
                            value={values.password}
                            onBlur={handleBlur('password')}
                            onChange={handleChange('password')}
                            type={showPasswordValue ? 'text' : 'password'}
                            input_box_styles={styles.input_block}
                            icons={<VscLockSmall/>}
                            timeToggle={7000}
                            lineActiveValue={activeValue}
                        >
                            {values.password.length < 1 &&
                                <span className={styles.placeholder_title}>Password...</span>}
                            <ErrorMessing
                                touched={touched.password}
                                errors={errors.password}
                                errorStyles={styles.input_error_messing}
                            />
                        </CustomInputRegister>
                        <ShowPassword showPasswordValue={showPasswordValue} toggleClick={toggleClick}/>
                        <RegisterBottom/>
                    </form>
                )}
            </Formik>
            <BackLogin/>
        </div>
    );
};

export default RegisterForm;
