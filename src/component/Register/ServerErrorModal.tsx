import React, {FC, useEffect, useMemo, useState} from 'react';
import styles from '../../styles/Register.module.css';
import CloseModalButton from "../CloseModalButton";
import {AiFillCloseSquare} from "react-icons/ai";

interface props {
    message?: string,
    closeModal: (value: boolean) => void
}

const ServerErrorModal: FC<props> = ({message, closeModal}) => {
    const [lineTimeCloseModal, setLineTimeCloseModal] = useState(100)
    useEffect(() => {
       const interval = setInterval(()=>{
          setLineTimeCloseModal(time=>{
              if(time > 0){
                  return time - 1
              }else {
                  return  time
              }
          })
       },100)
        return () => clearInterval(interval)
    }, [lineTimeCloseModal])
    useEffect(() => {
        if (lineTimeCloseModal === 0) {
           setTimeout(()=>{
               closeModal(false)
           },650)
        }
    }, [lineTimeCloseModal])
    const closeClassModal = useMemo(() => {
        return lineTimeCloseModal === 0 ? styles.close_active_class : ""
    }, [lineTimeCloseModal])
    useEffect(() => {
        if(closeClassModal !== ''){
            setTimeout(()=>{
                setLineTimeCloseModal(100)
            },600)
        }
    }, [closeClassModal])
    return (
        <div className={styles.Modal}>
            <div className={`${styles.modal_container} ${closeClassModal}`}>
                <CloseModalButton
                    icon_styles={styles.close_modal}
                    className={styles.btn_styles}
                    onClick={() => closeModal(false)}
                    icons={<AiFillCloseSquare/>}/>
             <div className={styles.error_messing}>
                 <p>{message}</p>
             </div>
                <div style={{
                    width: `${lineTimeCloseModal}%`
                }} className={styles.close_line_modal_time}>
                </div>
            </div>
        </div>
    );
};

export default ServerErrorModal;
