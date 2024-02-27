import React, { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:8000/allproducts")
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async(id) => {
    await fetch ("http://localhost:8000/removeproduct", {
      method: "POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            }, 
            body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div>
      <h1>All Products List</h1>
      <div>
        <div>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>
        <p>Remove</p>
        </div>

          <div>
        
              {allproducts.map((product, index) => {
              return (
              <div key={index}>
              <img src={product.image} alt="product-icon"/>
              <p>{product.name}</p>
              <p>{product.price}€</p>
              <p>{product.category}</p>
      <img onClick={()=>remove_product(product.id)} src={cross_icon} alt="remove-icon"/>
              </div>
              )
            })}

          </div>

    </div>
    </div>
  )

}

export default ListProduct;