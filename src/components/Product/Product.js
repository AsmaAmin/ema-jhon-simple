import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  //  console.log(props);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p> <small>only {stock} left in stock - order soon</small> </p>
                <button onClick={()=>props.handaleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;