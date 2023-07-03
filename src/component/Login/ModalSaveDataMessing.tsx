import React, {FC, useCallback} from 'react';
import styles from '../../styles/Login.module.css';
import CloseModalButton from "../CloseModalButton";
import {AiFillCloseSquare} from "react-icons/ai";

interface props {
    closeModal: (value: boolean) => void
}

const ModalSaveDataMessing: FC<props> = ({closeModal}) => {
    const close = useCallback(() => {
        closeModal(false)
    }, [])
    return (
        <div className={styles.Modal_Login_messing}>
            <div className={styles.Modal}>
                <CloseModalButton
                    onClick={close}
                    className={styles.close_button}
                    icon_styles={styles.close_icon}
                    icons={<AiFillCloseSquare/>}/>
                <ol>
                    <li>If you want to save your data, please follow the instructions given by us:</li>
                    <li>check if you wrote your password correctly or email !!!!</li>
                </ol>
            </div>
        </div>
    );
};

export default ModalSaveDataMessing;
