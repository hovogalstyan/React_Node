import React  from 'react';
import styles from '../../styles/Register.module.css';
import {registerIcons} from "../Login/IconsItems";
import useActiveClassTime from "../hooks/useActiveClassTime";
const IconsList = () => {
    const  [activeClass] = useActiveClassTime(styles.active_icons_box,4000)
    return (
             <ul className={`${styles.icons_list_box} ${activeClass}`}>
                 {
                     registerIcons.map(item =>(
                         item.name !== 'Github' &&
                             <li key={item.name}><span>{<item.Icon/>}</span><a href="#">Sign up with {item.name}</a></li>
                     ))
                 }
             </ul>
    );
};

export default IconsList;
