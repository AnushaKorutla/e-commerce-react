import React from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import "./Nav.css";


export default function Navbar({isLoggedIN, loginCount, onLogout}){
    const navigate = useNavigate();

    const handleLogout =()=>{
        onLogout();
        navigate("/login");
    }

    return(
        <nav className="navbar sidebar">
            <NavLink to='/login' className="nav-link">Home</NavLink>

            {!isLoggedIN ? (
                <>
                <NavLink to='/register' className="nav-link">Register</NavLink>
                <NavLink to='/leaderboard' className="nav-link">Leader board</NavLink>
                </>
            ) : (
            <>
                <NavLink to="/leaderboard" className="nav-link">Leaderboard</NavLink>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
                <span className="login-count">Logins:{loginCount}</span>
            </>
            )}
        </nav>
    );
}