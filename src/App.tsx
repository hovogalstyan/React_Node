import React, {FC} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";


const App: FC = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;
