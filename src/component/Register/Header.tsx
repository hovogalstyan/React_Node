import React, {FC} from 'react';
import styles from '../../styles/Register.module.css';
import useActiveClassTime from "../hooks/useActiveClassTime";

interface props {
    text: string
}

const Header: FC<props> = ({text}) => {
    const  [activeClass] = useActiveClassTime(styles.active_header_register,3400)
    return (
        <div className={`${styles.header_register} ${activeClass}`}>
            <h3>{text}</h3>
            <h3>{text}</h3>
        </div>
    );
};

export default Header;
