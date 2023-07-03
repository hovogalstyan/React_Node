import React from 'react';
import styles from '../../styles/Register.module.css'
import useActiveClassTime from "../hooks/useActiveClassTime";
const IconBottomTitle = () => {
    const  [activeClass] = useActiveClassTime(styles.active_title_button,6500)
    return (
        <div className={`${styles.icons_bottom_title} ${activeClass}`}>
                <span>-</span>
                <span>O</span>
                <span>R</span>
                <span>-</span>
            </div>
    );
};

export default IconBottomTitle;
