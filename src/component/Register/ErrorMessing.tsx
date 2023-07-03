import React, {FC} from 'react';
import {BiErrorCircle} from "react-icons/bi";

interface props {
    touched: any,
    errors: any,
    errorStyles:string
}

const ErrorMessing: FC<props> = ({
                                     touched,
                                     errors,
                                     errorStyles,
                                 }) => {
    return (
        <>
            {
                touched && errors && <span className={errorStyles}><BiErrorCircle/></span>
            }
        </>
    );
};

export default ErrorMessing;
