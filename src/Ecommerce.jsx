import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function  About(){
    const {id} = useParams();
    const [product, setProduct]=useState(null);
    const [ loading , setLoading] = useState(true);
    const [incart, setIncart] = useState(false);

    useEffect(() => {
        const fetchProducts= async () => {
        setLoading(true);
        try{
            const res= await fetch(`https://fakestoreapi.com/products`)
            if (!res.ok){
                throw new Error("products not found");
            }
            const data = await res.json();
            setProduct(data);
        }catch(error){
            console.error("Error feteching products:", error);
        }
        setLoading(false);
    };
    fetchProducts();
    },[id]);

    const handleCartToggle =()=>{
        setIncart(prev => !prev);
    };
    if (loading){
        return<div>Loading...</div>
    }
    if(!user){
        return <div>Products not found</div>
    }
    return(
        <div>
            <h1>Products</h1>
            <button onClick={handleCartToggle}>
                {incart ? "Remove cart": "Add to cart"}
            </button>
        </div>
    )
}
export default About;