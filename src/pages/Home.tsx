import React, {FC, useEffect} from 'react';
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

const Home: FC = () => {
    const [getCookie] = useCookies();
    const {token} = getCookie
    const navigate = useNavigate()
    useEffect(() => {
        if (token) {
            navigate('/task.com')
        } else {
            navigate('/login')
        }
    }, [token, navigate])
    return (
        <>
        </>
    );
};

export default Home;
