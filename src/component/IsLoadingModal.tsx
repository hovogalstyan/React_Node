import React, {FC} from 'react';

interface props {
    styles: string,
    animatedIcons: any
}

const IsLoadingModal: FC<props> = ({styles, animatedIcons}) => {
    return (
        <div className={styles}>
            {animatedIcons}
        </div>
    );
};

export default IsLoadingModal;
