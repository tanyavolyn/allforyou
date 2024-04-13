import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";


const SingleProduct = (itemsForSale) => {
 const {product} = itemsForSale;
const {addToCart} = useContext(ShopContext);
 

  return (
    <div>
  
    
          <img src={product.image} alt={product.name} /> 
    
     
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
       
  
          <div>${product.price}</div>

     
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      
      </div>
    </div>
  );
};

export default SingleProduct;