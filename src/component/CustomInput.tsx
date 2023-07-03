import React, {FC, InputHTMLAttributes, ReactNode} from 'react';

interface props extends InputHTMLAttributes<HTMLInputElement> {
    title?: string,
    inputStyles: string,
    children?: ReactNode,

}

const CustomInput: FC<props> = ({title, inputStyles, children, ...props}) => {
    return (
        <div className={inputStyles}>
            {title && <small>{title}</small>}
            <input  {...props} autoComplete={'off'} />
            {children}
        </div>
    );
};

export default CustomInput;
