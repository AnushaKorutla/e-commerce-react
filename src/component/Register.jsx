import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {Link} from'react-router-dom'
import './Register.css'

export default function Register({setLoggedIn}){
        const [form, setForm]= useState({name:'', email:'', password:''});
        const navigate = useNavigate();

        const handleChange = e => 
            setForm(prev => ({...prev, [e.target.name]:e.target.value}));

        const handleSubmit =e =>{
            e.preventDefault();
            if(localStorage.getItem(form.email))
                {alert('Email registered already');
                    return;
                }
            localStorage.setItem(form.email, JSON.stringify(form));
            navigate('/login');
        };
        return(
            <div>
            <form onSubmit={handleSubmit}>
                <h2>Register Page</h2>
                <input 
                name="name" 
                value={form.name}
                 placeholder="Username" 
                 onChange={handleChange} 
                 required
                 />
                <input
                 type="email" 
                 name="email"
                 value={form.email} 
                 placeholder="Email"
                onChange={handleChange}
                required
                   />
                <input
                 type="password"
                  name="password" 
                  value={form.password} 
                  placeholder="Password" 
                  onChange={handleChange}
                  required/>
                <button type="submit">Register</button>
                <p className="login-link-text">
                    Already have an account ? <Link to='/login'>Login</Link>
                </p>
            </form>
            </div>
        );
        
    }
