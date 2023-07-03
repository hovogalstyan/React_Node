import React, {FC, useEffect, useMemo, useState} from 'react';
import styles from '../../styles/Register.module.css';

interface props {
    animatedRegisterModal: boolean
}

const HeaderAnimated: FC<props> = ({animatedRegisterModal}) => {
    const [animatedText, setAnimatedText] = useState(false)
    useEffect(()=>{
          animatedRegisterModal && setTimeout(()=>{
              setAnimatedText(true)
          },1000)
    },[animatedRegisterModal]);
    const activeText = useMemo(()=>{
        return animatedText ? styles.active_text : ''
    },[animatedText])
    const text = 'ReGiStRaTiOn';
    const result = text.split('')
    return (
        <div className={styles.header_animated_block}>
            <ul className={`${styles.header_animated} ${activeText}`}>
                {
                    result.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default HeaderAnimated;
