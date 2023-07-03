import React, {FC} from 'react';
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {registerIconType} from "../../Types/types";
import styles from '../../styles/Login.module.css';

export const registerIcons: registerIconType [] = [
    {Icon: FcGoogle, name: 'Google', bg_color: '#1285E0'},
    {Icon: AiFillGithub, name: 'Github', bg_color: '#444444'},
    {Icon: FaFacebook, name: 'Facebook', bg_color: '#3B5998'},
]
const IconsItems: FC = () => {
    return (
        <div className={styles.icons_block}>
            <div className={styles.title_block}>
                <span></span>
                <small>Or continue with</small>
                <span></span>
            </div>
            <ul className={styles.icons_list}>
                {
                    registerIcons.map(item => (
                        <li key={item.name}><a href={'#'}>{<item.Icon/>}</a></li>
                    ))
                }
            </ul>
        </div>
    );
};

export default IconsItems;
