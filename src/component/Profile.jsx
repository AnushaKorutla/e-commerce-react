import React from "react";
export default function Profile(){
    const user= JSON.parse(localStorage.getItem(localStorage.getItem('userEmail')));

    return(
        <div className="quiz-container">
            <h1>Profile</h1>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
        </div>
    );
}