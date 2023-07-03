import React, {FC} from 'react';
import styles from '../../styles/Register.module.css'
import Checkbox from '@mui/material/Checkbox';
import useActiveClassTime from "../hooks/useActiveClassTime";

interface props {
    toggleClick:( ) => void
    showPasswordValue:boolean
}

const ShowPassword: FC<props> = ({toggleClick,showPasswordValue}) => {
    const [active] = useActiveClassTime(styles.active_password , 15500)
    return (
        <div className={`${styles.show_password} ${active}`}>
            <Checkbox checked={showPasswordValue}  onChange={toggleClick} style={{padding: 0}}/>
            <span>Show password</span>
        </div>
    );
};

export default ShowPassword;
