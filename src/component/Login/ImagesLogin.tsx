import React from 'react';
import images from '../images/logine.png';
import styles from '../../styles/Login.module.css';
const ImagesLogin = () => {
    return (
        <img  className={styles.images_login} src={images} alt="logo"/>
    );
};

export default ImagesLogin;
