import React from 'react';
import useActiveClassTime from "../hooks/useActiveClassTime";
import  styles from '../../styles/Register.module.css';
const RegisterBottom = () => {
     const [active] = useActiveClassTime(styles.active_bottom, 16200)
    return (
        <button type={'submit'} className={active}>
            Create Account
        </button>
    );
};

export default RegisterBottom;
