import React, {FC, InputHTMLAttributes, ReactNode, useEffect, useMemo, useState} from 'react';
import styles from '../styles/Register.module.css';

interface props extends InputHTMLAttributes<HTMLInputElement> {
    block_styles: string
    input_box_styles: string,
    children?: ReactNode,
    icons?: any,
    lineActiveValue?: boolean,
    timeToggle: number
}

const CustomInputRegister: FC<props> = ({
                                            input_box_styles,
                                            block_styles,
                                            timeToggle,
                                            lineActiveValue,
                                            icons,
                                            children,
                                            ...props
                                        }) => {
    const [animatedLine, setAnimatedLine] = useState(false);
    useEffect(() => {
        if (lineActiveValue) {
            setTimeout(()=>{
                setAnimatedLine(true)
            },timeToggle)
        }
    }, [lineActiveValue]);
    const activeClass = useMemo(() => {
        return animatedLine ? styles.animated_line_input_block : ''
    }, [animatedLine]);

    return (
        <div className={block_styles}>
            <div className={`${input_box_styles} ${activeClass}`}>
                <small>{icons}</small>
                <input {...props} autoComplete={'off'}/>
                {lineActiveValue && <span className={styles.animated_line}></span>}
            </div>
            {children}
        </div>
    );
};

export default CustomInputRegister;
