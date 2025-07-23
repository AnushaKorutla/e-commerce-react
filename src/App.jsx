import React, { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Register from "./component/Register";
import Login from "./component/Login";
import Quiz from "./component/Quiz";
import Leaderboard from "./component/Leaderboard";

export default function App(){
    const [isLoggedIn, setIsLoggedIn] =useState(false);
    const [loginCount, setLogInCount]= useState(0);

    useEffect(()=>{
        setIsLoggedIn(!!localStorage.getItem('userEmail'));
        setLogInCount(+localStorage.getItem('loginCount')||0)
    },[]);

    const handleLogin=()=>{
        const next=loginCount +1;
        localStorage.setItem('loginCount', next);
        setLogInCount(next);
        setIsLoggedIn(true);
    };

    const handleLogout=()=>{
        localStorage.removeItem('userEmail');
        setIsLoggedIn(false);
    };

    return(
        <BrowserRouter>
        <Navbar 
        isLoggedIn={isLoggedIn} 
        loginCount={loginCount}
        onLogout={handleLogout}
        />
        <div className="app-container">
            <Routes>
                <Route path='/' element={<Navigate to="login" replace/>}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/login' element={<Login onLogin={handleLogin}/>}></Route>
                <Route path='/quiz' element={<Quiz/>}></Route>
                <Route path="/leaderboard" element={<Leaderboard/>}></Route>
                <Route path='*' element={<Navigate to='/login' replace/>}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    );
}