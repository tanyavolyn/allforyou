import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Select from 'react-select';

const SingleProduct = (itemsForSale) => {
 const {product} = itemsForSale;
const {addToCart} = useContext(ShopContext);

const options = [
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
];

const [selectedOption, setSelectedOption] = useState(null);

console.log(selectedOption)
 return (
    <div>
  
    
          <img src={product.image} alt={product.name} /> 
    
     
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
       
  
          <div>${product.price}</div>

     
        <div className="productdisplay-right-size">
        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        />

        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      
      </div>
    </div>
  );
};

export default SingleProduct;
