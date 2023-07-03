import React from 'react';
import {useNavigate} from "react-router-dom";
import useActiveClassTime from "../hooks/useActiveClassTime";
import styles from '../../styles/Register.module.css';

const BackLogin = () => {
    const navigate = useNavigate()
    const [active] = useActiveClassTime(styles.active_text , 18000)
    return (
        <p className={`${styles.back_text} ${active}`}>
            Already have an account?
            <span onClick={() => navigate('/login')}> Log in</span>
        </p>
    );
};

export default BackLogin;
