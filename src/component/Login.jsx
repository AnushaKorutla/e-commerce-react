import { useState } from "react";
import{Link, useNavigate} from 'react-router-dom';

export default function Login({onLogin}){
    const [form, setForm] = useState({email:'', password:''});
    const navigate = useNavigate();
    
    const handleChange =e => 
        setForm(prev =>({...prev, [e.target.name]:e.target.value}));

    const handleSubmit= e =>{
        e.preventDefault();
        const stored = localStorage.getItem(form.email);
        if (!stored)
            {alert('Email not registered');
                return;
            }
        const user = JSON.parse(stored);
        if(user.password !== form.password)
            {alert('wrong password');
                return;
            }
        localStorage.setItem('userEmail', form.email);
        onLogin();
        navigate('/quiz');
    };
    return(
        <div className="login-container">
        <form onSubmit={handleSubmit}>
            <input 
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
              required
              />
            <button type="submit">Login</button>
            <p className="register-link-text">
                Don't have an account ?<Link to='/register'>Register</Link>
            </p>
        </form>
    </div>
    );
} 