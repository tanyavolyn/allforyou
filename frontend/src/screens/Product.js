import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from "../data/data";
import SingleProduct from '../Components/SingleProduct';
//import { ShopContext } from '../Context/ShopContext';
//import CartItems from '../Components/CartItems';

const Product = () => {
  //const {all_products} = useContext(ShopContext);
  const {id} = useParams();
  const product = data.find((e)=>e.id === Number(id));
 // console.log(product)
  
  return (
    <div>
      <SingleProduct product={product}/>
      {/* <CartItems product={product}/> */}

       </div>
  )
}

export default Product;