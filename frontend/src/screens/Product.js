import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from "../data/data";
import SingleProduct from '../Components/SingleProduct';

const Product = () => {
  
  const {id} = useParams();
  const product = data.find((e)=>e.id === Number(id));
  console.log(product)
  
  return (
    <div>
      <SingleProduct product={product}/>
       </div>
  )
}

export default Product;