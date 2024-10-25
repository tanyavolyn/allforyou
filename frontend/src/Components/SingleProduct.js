import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const SingleProduct = (itemsForSale) => {
 const {product} = itemsForSale;
const {addToCart} = useContext(ShopContext);

const [selectedOption, setSelectedOption] = useState("S");
console.log(selectedOption)

 return (
    <div className="container-singleproduct">
      <div className="productdisplay-left">
  
    
          <img src={product.image} alt={product.name} /> 
          </div>
    
     
      <div className="productdisplay-right">
        <h2>{product.name}</h2>
       
  
          <div className="singleproduct-price">${product.price}</div>

     
        <div className="productdisplay-right-size">


        <select className="singleproduct-size"
 value={selectedOption}
 onChange={e => setSelectedOption(e.target.value)}>
          <option  value="S">S</option>
          <option  value="M">M</option>
          <option  value="L">L</option>
          <option  value="XL">XL</option>
</select>

        </div>
        <button className="singleproduct-btn" onClick={()=>{addToCart(product.id, selectedOption)} }>HINZUFÜGEN</button>
 
    
      
      </div>
    
    </div>
  );
};

export default SingleProduct;
