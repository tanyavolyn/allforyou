import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <Link to={"/addproduct"} style={{textDecoration: "none"}}>
      <p>Add Product</p>      
      </Link>
      <Link to={"/listproduct"} style={{textDecoration: "none"}}>
      <p>Product List</p>      
      </Link>

    </div>
  )
}

export default Sidebar;