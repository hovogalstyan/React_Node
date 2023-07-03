import React, {ButtonHTMLAttributes, FC} from 'react';

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon_styles: string,
    icons: any
}

const CloseModalButton: FC<props> = ({icon_styles, icons, ...props}) => {
    return (
        <button type={'reset'} {...props}>
            <span className={icon_styles}>{icons}</span>
        </button>
    );
};

export default CloseModalButton;
