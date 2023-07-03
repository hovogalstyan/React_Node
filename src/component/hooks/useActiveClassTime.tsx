import React, {useEffect, useMemo, useState} from 'react';


const useActiveClassTime = (styles: string, time: number): [string,boolean] => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setToggle(true)
        }, time)
    }, [time])
    const activeClass = useMemo(() => {
        return toggle ? styles : ''
    }, [toggle])
    return [
        activeClass,
        toggle
    ]
};

export default useActiveClassTime;
