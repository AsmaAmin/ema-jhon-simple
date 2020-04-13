import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
  
    function handaleAddProduct (product){
        //console.log("added product", product);
        const newCart = [...cart, product];
        setCart(newCart);    
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            <ul>
    {products.map(pd =><Product handaleAddProduct={handaleAddProduct} product={pd}></Product>)}
            </ul>
            </div>
           <div className="cart-container">
   <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;