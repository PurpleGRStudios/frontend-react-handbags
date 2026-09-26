import React from "react";


function Product({label, image, imageAlt, nameOfBag, price}){
    return (
            <article>
                <span>{label}</span>
                <img src={image} alt={imageAlt}/>
                <p>{nameOfBag}</p>
                <h4>€{price},-</h4>
            </article>
    );
}


export default Product;