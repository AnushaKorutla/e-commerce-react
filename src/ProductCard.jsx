import React from "react";

export default function ProductCard({product, inCart, toggleCart}){
    return(
        <div className="product-card">
            <h3>{product.title}</h3>
            <p>price:${product.price} </p>
            <img src={product.image} alt={product.title} className="product-img"/>
            <button
            onClick={()=> toggleCart(product)}
            className={inCart ? "remove-btn":"add-btn"}>
                {inCart ? "Remove from cart":"Add to cart"}
            </button>
        </div>
    );
}