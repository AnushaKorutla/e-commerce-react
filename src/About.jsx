import React from "react";
function About({userInfo}){
    return(
    <div>
        <h1>About us</h1>
        <p>this is a about page</p>
        <h2>user Information</h2>
        <p>name:{userInfo.name}</p>
        <p>age:{userInfo.age}</p>
        <p>email:{userInfo.email}</p>
    </div>
    );
}
export default About;