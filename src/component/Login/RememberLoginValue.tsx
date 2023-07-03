import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import styles from '../../styles/Login.module.css';
import {AiOutlineCheck} from "react-icons/ai";

interface props {
    values: {
        email: string,
        password: string
    },
    isError: {
        email?: string,
        password?: string
    },
    openSaveModal: () => void
}

const RememberLoginValue: FC<props> = ({values, isError, openSaveModal}) => {
    const [saveData, setSaveData] = useState(false);
    const getData = JSON.parse(localStorage.getItem('save_login') as any);
    const saveLoginDate = useCallback(() => {
        if (!isError.email && !isError.password && values.password !== '' && values.email !== '') {
            localStorage.setItem('save_login', JSON.stringify({success: saveData, ...values}))
            setSaveData(!saveData)
        } else {
            openSaveModal()
            localStorage.removeItem('save_login')
        }
    }, [isError, saveData]);
    useEffect(() => {
        getData?.success && localStorage.removeItem('save_login')
    }, [getData]);
    const activeClass = useMemo(() => {
        return getData?.success === false ? styles.active_save_class : ''
    }, [getData])
    return (
        <div  className={`${styles.Remember_block}  ${activeClass}`}>
            <div onClick={saveLoginDate} ><span><AiOutlineCheck/></span></div>
            <span>Remember me</span>
        </div>
    );
};

export default RememberLoginValue;
