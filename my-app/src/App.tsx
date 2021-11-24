import React from 'react';
import {Route, Routes} from "react-router-dom";
import SignIn from './pages/SignIn';
import {Home} from "./pages/Home";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>

    );
};



