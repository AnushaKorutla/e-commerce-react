<<<<<<< HEAD
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
=======
import React,{useEffect,useState} from "react";
import About from "./About"
import ProductCard from "./ProductCard";
import "./App.css"

 export default function App(){
   const [products, setProducts] = useState([]);
   const [filtered, setFiltered] = useState([]);
   const [search, setSearch] = useState('');
   const [sort, setSort] = useState('');
   const [cart, setCart] = useState([]);

   const fetchProducts = async () =>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
    setFiltered(data);
   };

   useEffect(() =>{
    fetchProducts();
   },[]);

   const handleSearch=(e) =>{
    const value=e.target.value.toLowerCase();
    setSearch(value);
    const filteredData = products.filter((p) =>
    p.title.toLowerCase().includes(value)
    );
    setFiltered(filteredData);
   }

   const handleSort= (e) =>{
    const value = e.target.value;
    setSort(value);

    let sortedData =[...filtered];
    if (value ==='low'){
        sortedData.sort((a,b) => a.price - b.price);
    }else if (value ==='high'){
        sortedData.sort((a,b)=> b.price - a.price);
    }
    setFiltered(sortedData);
   };

   const toggleCart =(product) =>{
    const isInCart = cart.find(item=> item.id === product.id);
    if(isInCart){
        setCart(cart, filter(item => item.id !== product.id));
    }else{
        setCart([...cart, product]);
    }
   };
   return(
    <div className="container">
        <h1>Products</h1>
        <div className="controls">
            <button onClick={fetchProducts}>Fetch product</button>
            <input 
            type="text" 
            placeholder="Search by title..."
            value={search} 
            onChange={handleSearch}>
            </input>
            <select onChange={handleSort} value={sort}>
                <option value="">Sort by price</option>
                <option value="low">Low to high</option>
                <option value="high">High to Low</option>
            </select>
        </div>
            <div className="product-grid">
                {filtered.map((item) =>(
                    <ProductCard
                     key={item.id} 
                     product={item}
                     inCart={!!cart.find(p => p.id === item.id)}
                     toggleCart={toggleCart}/>
                ))}
            </div>
            <div className="cart-section">
                <h2>cart items</h2>
                {cart.length===0 ?(
                    <p>No items in cart</p>
                ):(
                    <div className="product-grid">
                        {cart.map(item =>(
                            <div key={item.id} className="product-card">
                                <img src={item.image} alt={item.title}/>
                                <h3>{item.title}</h3>
                                <p>${item.price}</p>
                                <button onClick={()=> toggleCart(item)}>
                                    Remove from cart
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
    </div>
   );
}
>>>>>>> 57434306b07c4386472c30f842a231e7bc030061
